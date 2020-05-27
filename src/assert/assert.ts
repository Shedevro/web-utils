import {AssertionHelper} from './assertion.helper';


/**
 * String
 */
export function string(value): asserts value is string {
  if (!isString(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('a string', '{1}'), AssertionHelper.valueToString(value));
  }
}

export function nullOrString(value): asserts value is string {
  if (isDefined(value)) {
    string(value);
  }
}

export function notEmptyString(value, message?: string): asserts value is string {
  if (!(isString(value) ? value.trim() : null)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('non-empty', '{1}'), AssertionHelper.valueToString(value), message);
  }
}


/**
 * Number
 */
export function number(value): asserts value is number {
  if (!isNumber(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('a number', '{1}'), AssertionHelper.valueToString(value));
  }
}


/**
 * Boolean
 */
export function boolean(value): asserts value is boolean {
  if (!isBoolean(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('a boolean', '{1}'), AssertionHelper.valueToString(value));
  }
}



/**
 * Object
 */
export function object(value): asserts value is object {
  if (!isObject(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('an object', '{1}'), AssertionHelper.valueToString(value));
  }
}



/**
 * Array
 */
export function array<T extends any[]>(value: T | any): asserts value is T {
  if (!isArray(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('an array', '{1}'), AssertionHelper.valueToString(value));
  }
}



/**
 * Instance
 */
export function instanceOf<T extends InstanceClass>(value, instanceClass: T): asserts value is InstanceType<T> {
  if (!(value instanceof instanceClass)) {
    AssertionHelper.throwError(
      AssertionHelper.getExpectedMsg('an instance of {1}', '{2}'),
      [
        AssertionHelper.valueToString(instanceClass),
        AssertionHelper.valueToString(AssertionHelper.typeOf(value) === 'object' ? value.name : value),
      ],
    );
  }
}

export function nullOrInstanceOf<T extends InstanceClass>(value, instanceClass: T): asserts value is InstanceType<T> {
  if (isDefined(value)) {
    instanceOf(value, instanceClass);
  }
}

export function allInstancesOf<T extends InstanceClass>(value: T[] | any, instanceClass: T): asserts value is InstanceType<T>[] {
  array(value);

  if (!value.every(obj => obj instanceof instanceClass)) {
    AssertionHelper.throwError(
      'expected all elements to be an instance of {1}',
      AssertionHelper.valueToString(instanceClass),
    );
  }
}



/**
 * Others
 */
export function defined<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (!isDefined(value)) {
    AssertionHelper.throwError(AssertionHelper.getExpectedMsg('defined'), null, message);
  }
}

export function equal(value, toEqual, message?: string) {
  if (value !== toEqual) {
    AssertionHelper.throwError(
      'expected {1} to equal {2}',
      [AssertionHelper.valueToString(value), AssertionHelper.valueToString(toEqual)],
      message,
    );
  }
}



/**
 * Types
 */
export function isString(value): boolean {
  return typeof value === 'string';
}

export function isNumber(value): boolean {
  return typeof value === 'number';
}

export function isBoolean(value): boolean {
  return typeof value === 'boolean';
}

export function isFunction(value): boolean {
  return typeof value === 'function';
}

export function isObject(value): boolean {
  return value !== null && typeof value === 'object' && !isArray(value);
}

export function isArray(value): boolean {
  return Array.isArray(value);
}

export function isDefined(value) {
  return value !== null && value !== undefined;
}
