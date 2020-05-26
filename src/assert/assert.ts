import {InstanceClass} from '../common/types/types';
import {WebUtilsAssertionError} from './assertion.error';

/**
 * String
 */
export function string(value): asserts value is string {
  if (!isString(value)) {
    throwError(expectedMsg('a string', '{1}'), valueToString(value));
  }
}

export function nullOrString(value): asserts value is string {
  if (isDefined(value)) {
    string(value);
  }
}

export function notEmptyString(value, message?: string): asserts value is string {
  if (!(isString(value) ? value.trim() : null)) {
    throwError(expectedMsg('non-empty', '{1}'), valueToString(value), message);
  }
}


/**
 * Number
 */
export function number(value): asserts value is number {
  if (!isNumber(value)) {
    throwError(expectedMsg('a number', '{1}'), valueToString(value));
  }
}


/**
 * Boolean
 */
export function boolean(value): asserts value is boolean {
  if (!isBoolean(value)) {
    throwError(expectedMsg('a boolean', '{1}'), valueToString(value));
  }
}



/**
 * Object
 */
export function object(value): asserts value is object {
  if (!isObject(value)) {
    throwError(expectedMsg('an object', '{1}'), valueToString(value));
  }
}



/**
 * Array
 */
export function array<T extends any[]>(value: T | any): asserts value is T {
  if (!isArray(value)) {
    throwError(expectedMsg('an array', '{1}'), valueToString(value));
  }
}



/**
 * Instance
 */
export function instanceOf<T extends InstanceClass>(value, instanceClass: T): asserts value is InstanceType<T> {
  if (!(value instanceof instanceClass)) {
    throwError(
      expectedMsg('an instance of {1}', '{2}'),
      [valueToString(instanceClass), valueToString(typeOf(value) === 'object' ? value.name : value)],
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
    throwError(
      'expected all elements to be an instance of {1}',
      valueToString(instanceClass),
    );
  }
}



/**
 * Others
 */
export function defined<T>(value: T, message?: string): asserts value is NonNullable<T> {
  if (!isDefined(value)) {
    throwError(expectedMsg('defined'), null, message);
  }
}

export function equal(value, toEqual, message?: string) {
  if (value !== toEqual) {
    throwError(
      'expected {1} to equal {2}',
      [valueToString(value), valueToString(toEqual)],
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



function typeOf(value) {
  switch (true) {
    case isObject(value):
      return 'object';
    case isArray(value):
      return 'array';
    default:
      return typeof value;
  }
}

function valueToString(value): string {
  switch (typeOf(value)) {
    case 'array':
      return `[${value.map(v => valueToString(v)).join(', ')}]`;
    case 'string':
      return `"${value}"`;
    case 'function':
      return `Function.${value.name}`;
    default:
      return String(value);
  }
}



function throwError(
  originalMessage: string,
  params?: any,
  customMessage?: string,
) {
  params = isArray(params) ? params : [params];
  const message = (customMessage ?? originalMessage)?.replace(
    /{\d+}/g,
    propPos => params[Number(propPos?.replace(/\D/g, '')) - 1] || '',
  );

  throw new WebUtilsAssertionError({ message, customMessageApplied: !!customMessage });
}



const expectedMsg = (expected: string, actual?: string) => {
  const gotLine = actual ? `. Got: ${actual}` : '';
  return `expected value to be ${expected}${gotLine}`;
};
