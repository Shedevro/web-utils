export abstract class TypeHelper {

  static isString(value: unknown): value is string {
    return typeof value === 'string';
  }

  static isNumber(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value);
  }

  static isBoolean(value: unknown): value is boolean {
    return typeof value === 'boolean';
  }

  static isObject(value: unknown): value is object {
    return typeof value === 'object' && this.isDefined(value) && !this.isArray(value);
  }

  static isFunction(value: unknown): value is CallableFunction {
    return typeof value === 'function';
  }

  static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  static isDefined<T>(value: T): value is NonNullable<T> {
    return !this.isUndefined(value);
  }

  static isUndefined(value: unknown): value is null | undefined {
    return value === undefined || value === null || Number.isNaN(value);
  }

  static typeOf(value: unknown): 'undefined' | 'array' | 'object' | 'boolean' | 'number' | 'string' | 'function' | 'symbol' | 'bigint' {
    switch (true) {
      case this.isUndefined(value):
        return 'undefined';
      case this.isArray(value):
        return 'array';
      case this.isObject(value):
        return 'object';
      default:
        return typeof value;
    }
  }
}
