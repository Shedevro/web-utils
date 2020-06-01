export type AssertTypeChecks = {
  isString(value): boolean;
  isNumber(value): boolean;
  isBoolean(value): boolean;
  isFunction(value): boolean;
  isObject(value): boolean;
  isArray(value): boolean;
  isDefined(value): boolean;
  isUndefined(value): boolean;
}
