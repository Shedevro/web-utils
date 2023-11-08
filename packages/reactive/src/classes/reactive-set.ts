import { shareReplayResetRef } from '../rxjs';
import { merge, Observable, startWith, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

/* eslint-disable @typescript-eslint/indent */
export type ReadonlyReactiveSet<TValue> =
  Pick<ReactiveSet<TValue>,
    | keyof ReadonlySet<TValue>
    | 'has$'
    | 'set$'
    | 'values$'>;
/* eslint-enable @typescript-eslint/indent */


export class ReactiveSet<TValue> implements Set<TValue> {

  readonly set$: Observable<ReadonlySet<TValue>>;
  readonly values$: Observable<TValue[]>;


  private _set!: Set<TValue>;

  private readonly setChanged$ = new Subject<void>();
  private readonly instanceInitialized$ = new Subject<void>();


  constructor(
    values?: readonly TValue[] | null,
  ) {
    this.set$ = merge(
      this.instanceInitialized$,
      this.setChanged$,
    ).pipe(
      startWith(void 0),
      map(() => this._set),
    );

    this.values$ = this.set$.pipe(
      map(map => [...map.values()]),
      shareReplayResetRef(),
    );

    this.initializeInstance(values ?? []);
  }


  [Symbol.iterator](): IterableIterator<TValue> {
    return this._set[Symbol.iterator]();
  }

  get [Symbol.toStringTag](): string {
    return this._set[Symbol.toStringTag];
  }

  get size(): number {
    return this._set.size;
  }

  keys(): IterableIterator<TValue> {
    return this._set.keys();
  }

  entries(): IterableIterator<[TValue, TValue]> {
    return this._set.entries();
  }

  values(): IterableIterator<TValue> {
    return this._set.values();
  }

  forEach(callbackfn: (value: TValue, value2: TValue, set: Set<TValue>) => void, thisArg?: unknown): void {
    return this._set.forEach(callbackfn, thisArg);
  }



  has(value: TValue): boolean {
    return this._set.has(value);
  }

  has$(value: TValue): Observable<boolean> {
    return this.setChanged$.pipe(
      startWith(void 0),
      map(() => this.has(value)),
      distinctUntilChanged(),
      shareReplayResetRef(),
    );
  }


  add(...values: TValue[]): this {
    if (
      values.length &&
      values.some(value => !this.has(value))
    ) {
      this.initializeInstance([
        ...this._set.values(),
        ...values,
      ], false);

      this.setChanged$.next();
    }

    return this;
  }

  setAll(values: TValue[]): this {
    this.clear();
    this.add(...values);

    return this;
  }

  delete(...values: TValue[]): boolean {
    if (!values.length) {
      return true;
    }

    values.forEach(key => {
      this._set.delete(key);
    });

    this.setChanged$.next();

    return true;
  }

  clear(): void {
    this.initializeInstance([], false);

    this.setChanged$.next();
  }


  private initializeInstance(
    values: readonly TValue[],
    emitInitializationEvent?: false,
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    this._set?.clear();
    this._set = new Set(values);

    if (emitInitializationEvent !== false) {
      this.instanceInitialized$.next();
    }
  }
}
