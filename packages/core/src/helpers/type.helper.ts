export abstract class TypeHelper {

  static isString(value): value is string {
    return typeof value === 'string';
  }

  static isNumber(value): value is number {
    return typeof value === 'number' && !isNaN(value);
  }

  static isBoolean(value): value is boolean {
    return typeof value === 'boolean';
  }

  static isObject(value): value is object {
    return typeof value === 'object' && this.isDefined(value) && !this.isArray(value);
  }

  static isFunction(value): value is Function {
    return typeof value === 'function';
  }

  static isArray(value): value is any[] {
    return Array.isArray(value);
  }

  static isDefined<T>(value: T): value is NonNullable<T> {
    return !this.isUndefined(value);
  }

  static isUndefined(value: unknown): value is null | undefined {
    return value === null  || value === undefined || Number.isNaN(value);
  }


  static typeOf(value) {
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
