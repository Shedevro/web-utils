/* eslint-disable prefer-rest-params */
import type { InstanceClass } from '@shedevro/core';
import { ExitFunctionError, TypeHelper } from '@shedevro/core';
import { MessageBuilder } from './classes/assertion-message-builder';
import { WebUtilsAssertionError } from './classes/error/assertion.error';
import { AssertionHelper } from './helpers/assertion.helper';
import type { AssertOperatorsConfig, AssertOptions, AssertType } from './types/common';


class AssertClass {

  constructor(
    private options: AssertOptions = {},
  ) {}


  private get newInstance(): AssertClass {
    return new AssertClass();
  }


  /** all operator */
  get all(): AssertClass {
    const instance = new AssertClass(this.options);
    instance.setOperator({ all: true });
    return instance;
  }

  /** is operator */
  get is(): AssertClass {
    const instance = new AssertClass(this.options);
    instance.setOperator({ is: true });
    return instance;
  }

  /** not operator */
  get not(): AssertClass {
    const instance = new AssertClass(this.options);
    instance.setOperator({ not: true });
    return instance;
  }

  /** nullOr operator */
  get nullOr(): AssertClass {
    const instance = new AssertClass(this.options);
    instance.setOperator({ nullOr: true });
    return instance;
  }



  /**
   * String
   */
  string(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('a string', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isString(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  emptyString(value: unknown, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'non-empty' : 'empty';
    const message = MessageBuilder.expectedToBe(`${prefix} string`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => {
      if (this.options.operators?.not) {
        return !TypeHelper.isString(v) || !v.trim(); // reversed for 'not' operator
      } else {
        return TypeHelper.isString(v) && !v.trim();
      }
    };

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  contains(value: unknown, subString: string, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'not to' : 'to';
    const message = MessageBuilder.expectedValue(`${prefix} contain {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isString(v) && v.includes(subString);


    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  startsWith(value: unknown, prefix: string, customMessage?: string): void | boolean {
    const msgPrefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${msgPrefix} to start with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isString(v) && v.startsWith(prefix);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  endsWith(value: unknown, suffix: string, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${prefix} to end with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isString(v) && v.endsWith(suffix);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  oneOf(value: unknown, values: string[], customMessage?: string): void | boolean {
    this.newInstance.array(values, 'Assert.oneOf:values should be an array. Got: {1}');

    const prefix = this.options.operators?.not ? ' not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} one of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => values.includes(v as string);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Number
   */
  number(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('a number', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  natural(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('a posistive number', '{1}');
    this.greaterThanOrEqual(value, 0, customMessage ?? message);
  }

  greaterThan(value: unknown, limit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('greater than {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v) && v > limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  greaterThanOrEqual(value: unknown, limit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('greater than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v) && v >= limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  lessThan(value: unknown, limit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('less than {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v) && v < limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  lessThanOrEqual(value: unknown, limit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('less than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v) && v <= limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  range(value: unknown, min: number, max: number, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} between {2} and {3}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isNumber(v) && v >= min && v <= max;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Boolean
   */
  boolean(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('a boolean', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isBoolean(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  true(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('true', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => v === true;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  false(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('false', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => v === false;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Object
   */
  object(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('an object', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isObject(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Function
   */
  function(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('a function', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isFunction(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Array
   */
  array(value: unknown, customMessage?: string): void | boolean {
    const message = MessageBuilder.expectedToBe('an array', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isArray(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  arrayLength(value: unknown, expectedLength: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expected('array length to be {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isArray(v) && v.length === expectedLength;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  arrayMinLength(value: unknown, minLimit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expected('array min length to be {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isArray(v) && v.length >= minLimit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  arrayMaxLength(value: unknown, maxLimit: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expected('array max length to be {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isArray(v) && v.length <= maxLimit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  arrayLengthBetween(value: unknown, min: number, max: number, customMessage?: string): void | boolean {
    const message = MessageBuilder.expected('array length to be between {2} and {3}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isArray(v) && v.length >= min && v.length <= max;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Instance
   */
  instanceOf<T extends InstanceClass>(
    value: unknown,
    instanceClass: T,
    customMessage?: string,
  ): void | boolean {
    const prefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => v instanceof instanceClass;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  instanceOfAny(
    value: unknown,
    instanceClasses: InstanceClass[],
    customMessage?: string,
  ): void | boolean {
    const assertInstance: AssertType = this.newInstance as unknown as AssertType;
    assertInstance.array(instanceClasses, 'Assert.instanceOfAny:instanceClasses should be an array. Got: {1}');


    const prefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => instanceClasses.some(instanceClass => v instanceof instanceClass);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }


  /**
   * RegExp
   */
  match(value: unknown, regExp: RegExp, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${prefix} to match {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => typeof v === 'string' && regExp.test(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(value, String(regExp)),
    );
  }


  /**
   * Other
   */
  defined<T>(value: T, customMessage?: string): void | boolean {
    const prefix = this.options.operators?.not ? 'undefined' : 'defined';
    const message = MessageBuilder.expectedToBe(prefix, '{1}');
    this.setMessage({ message, customMessage });

    const expression = (v: unknown): boolean => TypeHelper.isDefined(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  equal<TExpect>(value: unknown, expect: TExpect, customMessage?: string): void | boolean {
    const message = this.options.operators?.not
      ? MessageBuilder.expectedValue('not equal to {2}')
      : MessageBuilder.expected('{1} to equal {2}');
    this.setMessage({ message, customMessage });


    const expression = (v: unknown): boolean => v === expect;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  throws(expression: unknown, expectedErrorClass?: InstanceClass, customMessage?: string): void | boolean {
    const operatorIsApplied = this.options.operators?.is ?? false;
    let throwedError: WebUtilsAssertionError | { message?: string } | undefined;
    let expressionResult: unknown;

    try {
      const assertInstance: AssertType = this.newInstance as unknown as AssertType;
      assertInstance.function(expression, 'Assert.throws:expression must be function. Gor {1}');

      expressionResult = expression();
    } catch (error: unknown) {
      throwedError = error as typeof throwedError;
    }


    if (throwedError) {
      let isRightInstance = !expectedErrorClass || throwedError instanceof expectedErrorClass;

      if (this.options.operators?.not) {
        isRightInstance = !isRightInstance;
      }

      if (isRightInstance) {
        if (operatorIsApplied) {
          return true;
        }
        return;
      }

      expressionResult = AssertionHelper.valueToString(throwedError);
      if (throwedError.message?.trim()) {
        expressionResult += `: ${throwedError.message}`;
      }
    } else {
      if (this.options.operators?.not) {
        if (operatorIsApplied) {
          return true;
        }
        return;
      }
    }

    if (operatorIsApplied) {
      return false;
    }

    const message = (() => {
      const expectedErrorStr = expectedErrorClass ? '{2}' : 'error';
      const prefix = this.options.operators?.not ? 'not' : '';
      return MessageBuilder.expected(`${prefix} to throw ${expectedErrorStr}`, '{1}');
    })();

    this.setMessage({ message, customMessage });
    this.throwError(expressionResult, expectedErrorClass);
  }



  private processAssertion(
    value: unknown,
    assertExpression: (v: unknown) => boolean,
    throwError: () => void,
  ): void | boolean {

    const operatorIsApplied = this.options.operators?.is ?? false;


    try {

      this.processNullOrOperator(value);
      this.processAllOperator(value, assertExpression, throwError);


      let condition = assertExpression(value);

      if (this.options.operators?.not) {
        condition = !condition;
      }

      if (!condition) {
        throwError();
      }
    } catch (error: unknown) {

      if (error instanceof ExitFunctionError) {
        if (operatorIsApplied) {
          return true;
        }

        return;
      }

      if (error instanceof WebUtilsAssertionError) {
        if (operatorIsApplied) {
          return false;
        }

        throwError();
      }

      throw error;
    }

    if (operatorIsApplied) {
      return true;
    }
  }


  private processNullOrOperator(value: unknown): void {
    if (this.options.operators?.nullOr && TypeHelper.isUndefined(value)) {
      throw new ExitFunctionError();
    }
  }

  private processAllOperator(
    array: unknown,
    assertExpression: (v: unknown) => boolean,
    throwError: () => void,
  ): void {
    if (!this.options.operators?.all) {
      return;
    }

    const assertInstance: AssertType = this.newInstance as unknown as AssertType;
    assertInstance.array(array);

    array.forEach((value: unknown, index) => {
      const condition = assertExpression(value);

      if (!condition) {
        this.options.message += ` (item #${index})`;
        throwError();
      }
    });

    throw new ExitFunctionError();
  }



  private setMessage(messages: Pick<AssertOptions, 'message' | 'customMessage'>): void {
    const { message, customMessage = null } = messages;
    this.options = { ...this.options, message, customMessage };
  }

  private setOperator(operator: Partial<AssertOperatorsConfig>): void {
    this.options = {
      ...this.options,
      operators: {
        ...(this.options.operators ?? {}),
        ...operator,
      },
    };
  }



  private throwError(...params: unknown[]): void {
    let message = this.options.customMessage ?? this.options.message;
    if (!message) {
      throw new Error('assert message should be set');
    }
    message = message.replace(
      /{\d+}/g,
      propPos => {
        const index = Number(propPos.replace(/\D/g, '')) - 1;
        return params.length > index ? AssertionHelper.valueToString(params[index]) : '';
      },
    );

    throw new WebUtilsAssertionError(message, !!this.options.customMessage);
  }
}


export const Assert: AssertType = new AssertClass() as unknown as AssertType;
