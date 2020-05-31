import {WebUtilsAssertionError} from './assertion.error';
import {MsgBuilder} from './assertion-message-builder';
import type {InstanceClass} from '../common/types/types';
import type {AssertOpts, AssertType} from './types/common';
import type {AssertOperatorsConfig} from './types/operators';


class AssertClass implements AssertType {

  constructor(
    private opts: AssertOpts = {},
  ) {}


  /**
   * nullOr operator
   */
  get nullOr() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ nullOr: true });
    return instance;
  }

  /**
   * not operator
   */
  get not() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ not: true });
    return instance;
  }



  /**
   * String
   */
  string(value, customMessage?: string): asserts value is string {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('a string', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isString(value)) {
      this.throwError(value);
    }
  }

  emptyString(value, customMessage?: string): asserts value is string {
    if (this.checkNullOr(value)) {
      return;
    }

    try {
      this.string(value);

      let condition = !value.trim();

      if (this.opts.operators?.not) {
        condition = !condition;
      }

      if (condition) {
        return;
      }
    } catch (e) {}


    const prefix = this.opts.operators?.not ? 'non-empty' : 'empty';
    const message = MsgBuilder.expectedToBe(`${prefix} string`, '{1}');
    this.setMessage({ message, customMessage });

    this.throwError(value);
  }

  contains(value, subString: string, customMessage?: string): asserts value is string {
    if (this.checkNullOr(value)) {
      return;
    }

    try {
      this.string(value);

      let condition = value.includes(subString);

      if (this.opts.operators?.not) {
        condition = !condition;
      }

      if (condition) {
        return;
      }
    } catch (e) {}


    const prefix = this.opts.operators?.not ? 'not to' : 'to';
    const message = MsgBuilder.expectedValue(`${prefix} contain {2}`, '{1}');
    this.setMessage({ message, customMessage });

    this.throwError(value, subString);
  }

  startsWith(value, prefix: string, customMessage?: string): asserts value is string {
    if (this.checkNullOr(value)) {
      return;
    }

    try {
      this.string(value);

      let condition = value.startsWith(prefix);

      if (this.opts.operators?.not) {
        condition = !condition;
      }

      if (condition) {
        return;
      }
    } catch (e) {}


    const msgPrefix = this.opts.operators?.not ? 'not' : '';
    const message = MsgBuilder.expectedValue(`${msgPrefix} to start with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    this.throwError(value, prefix);
  }

  endsWith(value, suffix: string, customMessage?: string): asserts value is string {
    if (this.checkNullOr(value)) {
      return;
    }

    try {
      this.string(value);

      let condition = value.endsWith(suffix);

      if (this.opts.operators?.not) {
        condition = !condition;
      }

      if (condition) {
        return;
      }
    } catch (e) {}


    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MsgBuilder.expectedValue(`${prefix} to end with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    this.throwError(value, suffix);
  }



  /**
   * Number
   */
  number(value, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('a number', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value)) {
      this.throwError(value);
    }
  }

  natural(value, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }
    const message = MsgBuilder.expectedToBe('a posistive number', '{1}');
    this.greaterThanOrEqual(value, 0, customMessage ?? message);
  }

  greaterThan(value, limit: number, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('greater than {2}', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value) || value <= limit) {
      this.throwError(value, limit);
    }
  }

  greaterThanOrEqual(value, limit: number, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('greater than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value) || value < limit) {
      this.throwError(value, limit);
    }
  }

  lessThan(value, limit: number, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('less than {2}', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value) || value >= limit) {
      this.throwError(value, limit);
    }
  }

  lessThanOrEqual(value, limit: number, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('less than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value) || value > limit) {
      this.throwError(value, limit);
    }
  }


  range(value, min: number, max: number, customMessage?: string): asserts value is number {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('between {2} and {3}', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isNumber(value) || value < min || value > max) {
      this.throwError(value, min, max);
    }
  }



  /**
   * Boolean
   */
  boolean(value, customMessage?: string): asserts value is boolean {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('a boolean', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isBoolean(value)) {
      this.throwError(value);
    }
  }

  true(value, customMessage?: string): asserts value is true {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('true', '{1}');
    this.setMessage({ message, customMessage });


    if (value !== true) {
      this.throwError(value);
    }
  }

  false(value, customMessage?: string): asserts value is false {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('false', '{1}');
    this.setMessage({ message, customMessage });


    if (value !== false) {
      this.throwError(value);
    }
  }



  /**
   * Object
   */
  object(value, customMessage?: string): asserts value is object {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('an object', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isObject(value)) {
      this.throwError(value);
    }
  }



  /**
   * Array
   */
  array<T extends any[]>(array: T | any, customMessage?: string): asserts array is T {
    if (this.checkNullOr(array)) {
      return;
    }

    const message = MsgBuilder.expectedToBe('an array', '{1}');
    this.setMessage({ message, customMessage });


    if (!this.isArray(array)) {
      this.throwError(array);
    }
  }

  oneOf(value, values: (string | number)[], customMessage?: string): void {
    if (this.checkNullOr(value)) {
      return;
    }

    const prefix = this.opts.operators?.not ? ' not' : '';
    const message = MsgBuilder.expectedToBe(`${prefix} one of {2}`, '{1}');
    this.setMessage({ message, customMessage });


    let condition = values.includes(value);

    if (this.opts.operators?.not) {
      condition = !condition;
    }

    if (!condition) {
      this.throwError(value, values);
    }
  }

  arrayLength<T extends any[]>(array: T | any, number: number, customMessage?: string): asserts array is T {
    if (this.checkNullOr(array)) {
      return;
    }
    const message = MsgBuilder.expected('arary length to be {2}', '{1}');
    this.equal(array?.length, number, customMessage ?? message);
  }

  arrayMinLength<T extends any[]>(array: T | any, limit: number, customMessage?: string): asserts array is T {
    if (this.checkNullOr(array)) {
      return;
    }
    const message = MsgBuilder.expected('arary min length to be {2}', '{1}');
    this.greaterThan(array?.length, limit, customMessage ?? message);
  }

  arrayMaxLength<T extends any[]>(array: T | any, limit: number, customMessage?: string): asserts array is T {
    if (this.checkNullOr(array)) {
      return;
    }
    const message = MsgBuilder.expected('arary max length to be {2}', '{1}');
    this.lessThanOrEqual(array?.length, limit, customMessage ?? message);
  }

  arrayLengthBetween<T extends any[]>(
    array: T | any,
    min: number,
    max: number,
    customMessage?: string,
  ): asserts array is T {
    if (this.checkNullOr(array)) {
      return;
    }
    const message = MsgBuilder.expected('arary length to be between {2} and {3}', '{1}');
    this.range(array?.length, min, max, customMessage ?? message);
  }



  /**
   * Instance
   */
  instanceOf<T extends InstanceClass>(
    value,
    instanceClass: T,
    customMessage?: string,
  ): asserts value is InstanceType<T> {
    if (this.checkNullOr(value)) {
      return;
    }

    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MsgBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });


    let condition = value instanceof instanceClass;

    if (this.opts.operators?.not) {
      condition = !condition;
    }

    if (!condition) {
      this.throwError(value, instanceClass);
    }
  }

  instanceOfAny(
    value,
    instanceClasses: InstanceClass[],
    customMessage?: string,
  ): void {
    if (this.checkNullOr(value)) {
      return;
    }

    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MsgBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });


    let condition = instanceClasses.some(c => value instanceof c);

    if (this.opts.operators?.not) {
      condition = !condition;
    }

    if (!condition) {
      this.throwError(value, instanceClasses);
    }
  }


  allAreInstanceOf<T extends InstanceClass>(
    value: T[] | any,
    instanceClass: T,
    customMessage?: string,
  ): asserts value is InstanceType<T>[] {
    if (this.checkNullOr(value)) {
      return;
    }

    try {
      this.array(value);

      if (value.every(obj => obj instanceof instanceClass)) {
        return;
      }
    } catch (e) {}


    const message = MsgBuilder.expected('all elements to be an instance of {2}', '{1}');
    this.setMessage({ message, customMessage });

    this.throwError(value, instanceClass);
  }



  /**
   * Others
   */
  defined<T>(value: T, customMessage?: string): asserts value is NonNullable<T> {
    const prefix = this.opts.operators?.not ? 'defined' : 'undefined';
    const message = MsgBuilder.expectedToBe(prefix, '{1}');
    this.setMessage({ message, customMessage });


    let condition = this.isDefined(value);

    if (this.opts.operators?.not) {
      condition = !condition;
    }

    if (!condition) {
      this.throwError(value);
    }
  }

  equal(value, expect, customMessage?: string): void {
    if (this.checkNullOr(value)) {
      return;
    }

    const message = this.opts.operators?.not
      ? MsgBuilder.expectedValue('not equal to {2}')
      : MsgBuilder.expected('{1} to equal {2}');
    this.setMessage({ message, customMessage });


    let condition = value === expect;

    if (this.opts.operators?.not) {
      condition = !condition;
    }

    if (!condition) {
      this.throwError(value, expect);
    }
  }

  throws(expression: () => any, errorClass?: InstanceClass, customMessage?: string): void {
    const message = MsgBuilder.expected('to throw {2}', '{1}');
    this.setMessage({ message, customMessage });


    let throwedError: InstanceClass | null = null;

    try {
      expression();
    } catch (error) {
      if (!errorClass || error instanceof errorClass) {
        return;
      }
      throwedError = error;
    }

    this.throwError(throwedError, errorClass ?? 'error');
  }



  /**
   * Types
   */
  isString(value): boolean {
    return typeof value === 'string';
  }

  isNumber(value): boolean {
    return typeof value === 'number';
  }

  isBoolean(value): boolean {
    return typeof value === 'boolean';
  }

  isFunction(value): boolean {
    return typeof value === 'function';
  }

  isObject(value): boolean {
    return typeof value === 'object' && this.isDefined(value) && !this.isArray(value);
  }

  isArray(value): boolean {
    return Array.isArray(value);
  }

  isDefined(value) {
    return !this.isUndefined(value);
  }

  isUndefined(value) {
    return value === null || value === undefined;
  }



  private checkNullOr(value): boolean {
    return !!this.opts.operators?.nullOr && !this.isDefined(value);
  }



  private setMessage(messages: Pick<AssertOpts, 'message' | 'customMessage'>) {
    const { message, customMessage = null } = messages;
    this.opts = { ...this.opts, message, customMessage };
  }

  private setOperator(operator: Partial<AssertOperatorsConfig>) {
    this.opts = {
      ...this.opts,
      operators: {
        ...(this.opts.operators ?? {}),
        ...operator,
      },
    };
  }



  private typeOf(value) {
    switch (true) {
      case this.isObject(value):
        return 'object';
      case this.isArray(value):
        return 'array';
      case this.isUndefined(value):
        return 'undefined';
      default:
        return typeof value;
    }
  }


  private valueToString(value): string {
    switch (this.typeOf(value)) {
      case 'array':
        return `[${value.map(v => this.valueToString(v)).join(', ')}]`;
      case 'string':
        return `"${value}"`;
      case 'function':
        return value.name ?? 'Function';
      case 'object':
        return value.name ?? value.constructor.name ?? 'Object';
      default:
        return String(value);
    }
  }



  private throwError(...params: any[]) {
    let message = this.opts.customMessage ?? this.opts.message;
    if (!message) {
      throw new Error('message should be set');
    }
    params = params ?? [];
    message = message.replace(
      /{\d+}/g,
      propPos => {
        const index = Number(propPos.replace(/\D/g, '')) - 1;
        return params.length > index ? this.valueToString(params[index]) : '';
      },
    );

    throw new WebUtilsAssertionError(message, !!this.opts.customMessage);
  }
}


export const Assert: AssertType = new AssertClass();
