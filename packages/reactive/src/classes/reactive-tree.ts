import { Assert } from '@shedevro/assert';
import { combineLatest, mergeMap, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { defined, shareReplayResetRef } from '../rxjs';
import { ReactiveMap, ReadonlyReactiveMap } from './reactive-map';
import { ReactiveSet } from './reactive-set';


export type ReactiveTreeNodeType = {
  id: string;
  parentId?: string | null;
};


export class ReactiveTree<TNode extends ReactiveTreeNodeType> {

  readonly rootNodes$: Observable<TNode[]>;

  private readonly _nodesMap = new ReactiveMap<string, TNode>();
  private readonly _rootNodeIdsSet = new ReactiveSet<string>();
  private readonly _childNodeIdsMap = new ReactiveMap<string, Set<string>>();
  private readonly _orphanNodesMap = new ReactiveMap<string, TNode>();


  constructor(
    private readonly sortCompareFn?: (first: TNode, second: TNode) => number,
  ) {
    this.rootNodes$ = this._rootNodeIdsSet.values$.pipe(
      switchMap(nodeIds => this.getNodesById$(nodeIds)),
      shareReplayResetRef(),
    );
  }


  get nodesMap(): ReadonlyReactiveMap<string, TNode> {
    return this._nodesMap;
  }


  getParent(nodeId: string): TNode | null {
    const { parentId } = this.getNodeById(nodeId);

    if (!parentId) {
      return null;
    }

    return this._nodesMap.get(parentId) ?? null;
  }

  getParent$(nodeId: string): Observable<TNode | null> {
    return this._nodesMap.get$(nodeId).pipe(
      switchMap(node => {
        if (!node?.parentId) {
          return of(null);
        }
        return this._nodesMap.get$(node.parentId).pipe(
          map(node => node ?? null),
        );
      }),
    );
  }

  recursivelyGetAllParents$(nodeId: string): Observable<TNode[]> {
    const getRecursive$ = (nId: string): Observable<TNode[]> => this._nodesMap.get$(nId).pipe(
      mergeMap(node => {
        if (!node?.parentId) {
          return of([]);
        }

        return combineLatest([
          this._nodesMap.get$(node.parentId).pipe(defined()),
          getRecursive$(node.parentId),
        ]).pipe(
          map(nodes => nodes.flat() as TNode[]),
        );
      }),
    );

    return getRecursive$(nodeId).pipe(
      map(nodes => nodes.reverse()),
      shareReplayResetRef(),
    );
  }

  recursivelyGetAllParents(nodeId: string): TNode[] {
    const node = this.nodesMap.get(nodeId);
    if (!node?.parentId) {
      return [];
    }

    const parentNode = this.nodesMap.get(node.parentId);
    if (!parentNode) {
      return [];
    }

    return [
      parentNode,
      ...this.recursivelyGetAllParents(parentNode.id),
    ];
  }

  recursivelyGetAllChildIds(nodeId: string): string[] {
    const childIds = [...this._childNodeIdsMap.get(nodeId) ?? []];

    if (!childIds.length) {
      return [];
    }

    return [
      ...childIds,
      ...childIds.flatMap(childId => this.recursivelyGetAllChildIds(childId)),
    ];
  }

  getChildren$(nodeId: string): Observable<TNode[]> {
    return this._childNodeIdsMap.get$(nodeId).pipe(
      map(childNodeIdsSet => [...childNodeIdsSet ?? []]),
      switchMap(childNodeIds => this.getNodesById$(childNodeIds)),
      shareReplayResetRef(),
    );
  }

  getChildren(nodeId: string): TNode[] {
    const childIds = [...this._childNodeIdsMap.get(nodeId) ?? []];

    return this.getNodesById(childIds);
  }

  getSiblings$(nodeId: string): Observable<TNode[]> {
    return this._nodesMap.get$(nodeId).pipe(
      switchMap(node => {
        if (!node) {
          return of([]);
        }

        if (node.parentId) {
          return this.getChildren$(node.parentId);
        }

        return this.rootNodes$;
      }),
    );
  }

  getNodeSiblingIndex$(nodeId: string): Observable<number> {
    return this.getSiblings$(nodeId).pipe(
      map(nodes => nodes.findIndex(node => node.id === nodeId)),
      shareReplayResetRef(),
    );
  }

  getLevel(nodeId: string): number {
    let parent = this.getParent(nodeId);
    let level = 1;

    while (parent) {
      parent = this.getParent(parent.id);
      ++level;
    }

    return level;
  }


  setNodes(...nodesToAdd: TNode[]): void {
    nodesToAdd.forEach(nodeToAdd => {

      // Remove existing node from root/parent if parent changed
      const existingNode = this._nodesMap.get(nodeToAdd.id);
      if (existingNode) {
        if (!existingNode.parentId && nodeToAdd.parentId) {
          this._rootNodeIdsSet.delete(nodeToAdd.id);
        } else if (
          existingNode.parentId &&
          existingNode.parentId !== nodeToAdd.parentId &&
          this._childNodeIdsMap.has(existingNode.parentId)
        ) {
          const childrenSet = this._childNodeIdsMap.get(existingNode.parentId)!;
          childrenSet.delete(existingNode.id);

          this._childNodeIdsMap.set(existingNode.parentId, childrenSet);
        }
      }

      if (nodeToAdd.parentId) {
        // Parent is known
        if (this._nodesMap.has(nodeToAdd.parentId)) {
          this._nodesMap.set(nodeToAdd.id, nodeToAdd);
          this._childNodeIdsMap.set(
            nodeToAdd.parentId,
            (this._childNodeIdsMap.get(nodeToAdd.parentId) ?? new Set()).add(nodeToAdd.id),
          );
        } else {
          // Add to orphans
          this._orphanNodesMap.set(nodeToAdd.id, nodeToAdd);
        }
      } else {
        this._nodesMap.set(nodeToAdd.id, nodeToAdd);
        this._rootNodeIdsSet.add(nodeToAdd.id);
      }

      // Pick from orphans
      const orphanChildren = [...this._orphanNodesMap.values()].filter(node =>
        node.parentId === nodeToAdd.id,
      );
      if (orphanChildren.length) {
        this._orphanNodesMap.deleteMany(orphanChildren.map(node => node.id));
        this.setNodes(...orphanChildren);
      }
    });
  }


  deleteNodes(...nodeIds: string[]): void {
    // Delete node from parent's children
    nodeIds.forEach(nodeId => {
      const node = this.getNodeById(nodeId);
      if (!node.parentId) {
        return;
      }

      const childrenSet = this._childNodeIdsMap.get(node.parentId)!;
      childrenSet.delete(node.id);

      this._childNodeIdsMap.set(node.parentId, childrenSet);
    });

    const nodeIdsToRemove = [
      ...nodeIds,
      ...nodeIds.flatMap(nodeId => this.recursivelyGetAllChildIds(nodeId)),
    ];

    this._rootNodeIdsSet.delete(...nodeIdsToRemove);
    this._childNodeIdsMap.deleteMany(nodeIdsToRemove);
    this._nodesMap.deleteMany(nodeIdsToRemove);
  }

  deleteChildrenOfNode(nodeId: string): void {
    const childIds = [...this._childNodeIdsMap.get(nodeId) ?? []];
    this.deleteNodes(...childIds);
  }


  clear(): void {
    this._rootNodeIdsSet.clear();
    this._childNodeIdsMap.clear();
    this._nodesMap.clear();
    this._orphanNodesMap.clear();
  }


  private getNodeById(nodeId: string): TNode {
    const node = this._nodesMap.get(nodeId);
    Assert.defined(node, `Node "${nodeId}" not found`);

    return node;
  }

  private getNodesById$(nodeIds: string[]): Observable<TNode[]> {
    if (!nodeIds.length) {
      return of([]);
    }

    return combineLatest(
      nodeIds.map(nodeId =>
        this._nodesMap.get$(nodeId).pipe(
          map(node => {
            Assert.defined(node, `Node "${nodeId}" not found`);
            return node;
          }),
        ),
      ),
    ).pipe(
      map(nodes => nodes.filter(Boolean)),
      map(nodes =>
        this.sortCompareFn
          ? nodes.sort(this.sortCompareFn)
          : nodes,
      ),
    );
  }

  private getNodesById(nodeIds: string[]): TNode[] {
    const nodes = nodeIds.map(nodeId => {
      const node = this._nodesMap.get(nodeId);
      Assert.defined(node, `Node "${nodeId}" not found`);

      return node;
    });

    return this.sortCompareFn
      ? nodes.sort(this.sortCompareFn)
      : nodes;
  }
}
