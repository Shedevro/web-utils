import { merge, Observable, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { shareReplayResetRef } from '../rxjs';


type EntriesType<K, V> = readonly (readonly [K, V])[];


/* eslint-disable @typescript-eslint/indent */
export type ReadonlyReactiveMap<TKey, TValue> =
  Pick<ReactiveMap<TKey, TValue>,
    | keyof ReadonlyMap<TKey, TValue>
    | 'map$'
    | 'entries$'
    | 'values$'
    | 'mapChanges$'
    | 'get$'
    | 'getByKeys'>;
/* eslint-enable @typescript-eslint/indent */

/**
 * @class ReactiveMap
 *
 * Reactive Map with observable functions inside
 */
export class ReactiveMap<TKey, TValue> implements Map<TKey, TValue> {

  readonly map$: Observable<ReadonlyMap<TKey, TValue>>;
  readonly entries$: Observable<[TKey, TValue][]>;
  readonly values$: Observable<TValue[]>;

  readonly mapChanges$: Observable<TKey[]>;
  private readonly _mapChanges$: Subject<TKey[]>;


  private _map!: Map<TKey, TValue>;

  private readonly _mapInstanceInitialized$ = new Subject<void>();


  constructor(
    entries?: EntriesType<TKey, TValue> | null,
    private readonly props: {
      sortCompareFn?: (first: TValue, second: TValue) => number,
    } = {},
  ) {

    this._mapChanges$ = new Subject();
    this.mapChanges$ = this._mapChanges$.asObservable();

    this.map$ = merge(
      this._mapInstanceInitialized$,
      this._mapChanges$,
    ).pipe(
      startWith(void 0),
      map(() => this._map),
    );

    this.entries$ = this.map$.pipe(
      map(map => [...map.entries()]),
      shareReplayResetRef(),
    );

    this.values$ = this.map$.pipe(
      map(map => [...map.values()]),
      map(values => {
        if (this.props.sortCompareFn) {
          return values.sort(this.props.sortCompareFn);
        }
        return values;
      }),
      shareReplayResetRef(),
    );

    this.initializeMapInstance(entries ?? []);
  }


  [Symbol.iterator](): IterableIterator<[TKey, TValue]> {
    return this._map[Symbol.iterator]();
  }

  get [Symbol.toStringTag](): string {
    return this._map[Symbol.toStringTag];
  }


  get size(): number {
    return this._map.size;
  }

  entries(): IterableIterator<[TKey, TValue]> {
    return this._map.entries();
  }

  keys(): IterableIterator<TKey> {
    return this._map.keys();
  }

  values(): IterableIterator<TValue> {
    return this._map.values();
  }

  forEach(callbackfn: (value: TValue, key: TKey, map: Map<TKey, TValue>) => void, thisArg?: unknown): void {
    return this._map.forEach(callbackfn, thisArg);
  }

  has(key: TKey): boolean {
    return this._map.has(key);
  }



  get(key: TKey): TValue | undefined {
    return this._map.get(key);
  }

  get$(key: TKey): Observable<TValue | undefined> {
    return this._mapChanges$.pipe(
      filter(changedKey => !changedKey.length || changedKey.includes(key)),
      startWith(void 0),
      map(() => this.get(key)),
      shareReplayResetRef(),
    );
  }

  getByKeys(keys: TKey[]): TValue[] {
    return keys.reduce((acc, key) => {
      const value = this.get(key);
      if (value !== undefined) {
        acc.push(value);
      }
      return acc;
    }, [] as TValue[]);
  }


  set(key: TKey, value: TValue): this {
    this.setMany([[key, value]]);

    return this;
  }

  setMany(entries: EntriesType<TKey, TValue>): void {
    if (!entries.length) {
      return;
    }

    this.initializeMapInstance([
      ...this._map.entries(),
      ...entries,
    ], false);

    this._mapChanges$.next(entries.map(([key]) => key));
  }

  setAll(entries: EntriesType<TKey, TValue>): void {
    this.clear();

    this.setMany(entries);
  }


  delete(key: TKey): boolean {
    const wasDeleted = this._map.delete(key);

    this._mapChanges$.next([key]);

    return wasDeleted;
  }

  deleteMany(keys: TKey[]): void {
    if (!keys.length) {
      return;
    }

    keys.forEach(key => {
      this._map.delete(key);
    });

    this._mapChanges$.next(keys);
  }

  clear(): void {
    this.initializeMapInstance([], false);

    this._mapChanges$.next([]);
  }


  private initializeMapInstance(
    entries: EntriesType<TKey, TValue>,
    emitInitializationEvent?: false,
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    this._map?.clear();
    this._map = new Map(entries);

    if (emitInitializationEvent !== false) {
      this._mapInstanceInitialized$.next();
    }
  }
}
