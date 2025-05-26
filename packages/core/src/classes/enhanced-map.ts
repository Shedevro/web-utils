type EntriesType<K, V> = readonly (readonly [K, V])[];

export type ReadonlyEnhancedMap<TKey, TValue> = ReadonlyMap<TKey, TValue> & {
  getValues(): TValue[];
  getByKeys(keys: TKey[]): TValue[];
};

export class EnhancedMap<TKey, TValue> extends Map<TKey, TValue> implements ReadonlyEnhancedMap<TKey, TValue> {

  constructor(
    entries?: EntriesType<TKey, TValue> | null,
    private readonly props: {
      sortCompareFn?: (first: TValue, second: TValue) => number;
    } = {},
  ) {
    super(entries);
  }

  getValues(): TValue[] {
    const values = Array.from(this.values());

    if (this.props.sortCompareFn) {
      return values.sort(this.props.sortCompareFn);
    }

    return values;
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

  setMany(entries: EntriesType<TKey, TValue>): void {
    for (const [key, value] of entries) {
      this.set(key, value);
    }
  }

  setAll(entries: EntriesType<TKey, TValue>): void {
    this.clear();

    this.setMany(entries);
  }

  deleteMany(keys: TKey[]): void {
    keys.forEach(key => {
      this.delete(key);
    });
  }
}
