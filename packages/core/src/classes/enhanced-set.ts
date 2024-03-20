export class EnhancedSet<TValue> extends Set<TValue> {

  getValues(): TValue[] {
    return Array.from(this.values());
  }

  addMany(values: TValue[]): void {
    for (const value of values) {
      this.add(value);
    }
  }

  setAll(values: TValue[]): void {
    this.clear();

    this.addMany(values);
  }

  deleteMany(values: TValue[]): void {
    values.forEach(value => {
      this.delete(value);
    });
  }
}
