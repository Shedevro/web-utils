import {ExitFunctionError, TypeHelper} from '@shedevro/core';
import type {InstanceClass} from '@shedevro/core';

import {WebUtilsAssertionError} from './classes/error/assertion.error';
import {MessageBuilder} from './classes/assertion-message-builder';
import {AssertionHelper} from './helpers/assertion.helper';
import type {AssertOpts, AssertType} from './types/common';
import type {AssertOperatorsConfig} from './types/config';


class AssertClass implements AssertType {

  constructor(
    private opts: AssertOpts = {},
  ) {}


  private get newInstance(): AssertType {
    // @ts-ignore
    return new AssertClass();
  }


  /** all operator */
  get all() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ all: true });
    return instance;
  }

  /** is operator */
  /** @ts-ignore */
  get is() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ is: true });
    return instance;
  }

  /** not operator */
  /** @ts-ignore */
  get not() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ not: true });
    return instance;
  }

  /** nullOr operator */
  /** @ts-ignore */
  get nullOr() {
    const instance = new AssertClass(this.opts);
    instance.setOperator({ nullOr: true });
    return instance;
  }



  /**
   * String
   */
  string(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('a string', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isString(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  emptyString(value, customMessage?: string) {
    const prefix = this.opts.operators?.not ? 'non-empty' : 'empty';
    const message = MessageBuilder.expectedToBe(`${prefix} string`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => {
      if (this.opts.operators?.not) {
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

  contains(value, subString: string, customMessage?: string) {
    const prefix = this.opts.operators?.not ? 'not to' : 'to';
    const message = MessageBuilder.expectedValue(`${prefix} contain {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isString(v) && v.includes(subString);


    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  startsWith(value, prefix: string, customMessage?: string) {
    const msgPrefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${msgPrefix} to start with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isString(v) && v.startsWith(prefix);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  endsWith(value, suffix: string, customMessage?: string) {
    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${prefix} to end with {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isString(v) && v.endsWith(suffix);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Number
   */
  number(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('a number', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  natural(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('a posistive number', '{1}');
    this.greaterThanOrEqual(value, 0, customMessage ?? message);
  }

  greaterThan(value, limit: number, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('greater than {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v) && v > limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  greaterThanOrEqual(value, limit: number, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('greater than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v) && v >= limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  lessThan(value, limit: number, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('less than {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v) && v < limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  lessThanOrEqual(value, limit: number, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('less than or equal to {2}', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v) && v <= limit;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }


  range(value, min: number, max: number, customMessage?: string) {
    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} between {2} and {3}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isNumber(v) && v >= min && v <= max;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Boolean
   */
  boolean(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('a boolean', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isBoolean(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  true(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('true', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => v === true;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  false(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('false', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => v === false;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Object
   */
  object(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('an object', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isObject(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Function
   */
  function(value, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('a function', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isFunction(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }



  /**
   * Array
   */
  array(array, customMessage?: string) {
    const message = MessageBuilder.expectedToBe('an array', '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isArray(v);

    return this.processAssertion(
      array,
      expression,
      () => this.throwError(...arguments),
    );
  }

  oneOf(value, values: (string | number)[], customMessage?: string) {
    const Instance: AssertType = this.newInstance;
    Instance.array(values, 'Assert.oneOf:values should be an array. Got: {1}');


    const prefix = this.opts.operators?.not ? ' not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} one of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => values.includes(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  arrayLength(array: any[], number: number, customMessage?: string) {
    const message = MessageBuilder.expected('arary length to be {2}', '{1}');
    return this.equal(array?.length, number, customMessage ?? message);
  }

  arrayMinLength(array: any[], limit: number, customMessage?: string) {
    const message = MessageBuilder.expected('arary min length to be {2}', '{1}');
    return this.greaterThanOrEqual(array?.length, limit, customMessage ?? message);
  }

  arrayMaxLength(array: any[], limit: number, customMessage?: string) {
    const message = MessageBuilder.expected('arary max length to be {2}', '{1}');
    return this.lessThanOrEqual(array?.length, limit, customMessage ?? message);
  }

  arrayLengthBetween<T extends any[]>(
    array: T | any,
    min: number,
    max: number,
    customMessage?: string,
  ) {
    const message = MessageBuilder.expected('arary length to be between {2} and {3}', '{1}');
    return this.range(array?.length, min, max, customMessage ?? message);
  }



  /**
   * Instance
   */
  instanceOf<T extends InstanceClass>(
    value,
    instanceClass: T,
    customMessage?: string,
  ) {
    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => v instanceof instanceClass;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  instanceOfAny(
    value,
    instanceClasses: InstanceClass[],
    customMessage?: string,
  ) {
    const Instance: AssertType = this.newInstance;
    Instance.array(instanceClasses, `Assert.instanceOfAny:instanceClasses should be an array. Got: {1}`);


    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedToBe(`${prefix} an instance of {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => instanceClasses.some(Class => v instanceof Class);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }


  /**
   * RegExp
   */
  match(value, regExp: RegExp, customMessage?: string) {
    const Instance: AssertType = this.newInstance;
    Instance.instanceOf(regExp, RegExp, 'Assert.match:regExp should be an instance of RegExp. Got: {1}');


    const prefix = this.opts.operators?.not ? 'not' : '';
    const message = MessageBuilder.expectedValue(`${prefix} to match {2}`, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => regExp.test(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(value, String(regExp)),
    );
  }


  /**
   * Other
   */
  defined<T>(value: T, customMessage?: string) {
    const prefix = this.opts.operators?.not ? 'undefined' : 'defined';
    const message = MessageBuilder.expectedToBe(prefix, '{1}');
    this.setMessage({ message, customMessage });

    const expression = v => TypeHelper.isDefined(v);

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  equal(value, expect, customMessage?: string) {
    const message = this.opts.operators?.not
      ? MessageBuilder.expectedValue('not equal to {2}')
      : MessageBuilder.expected('{1} to equal {2}');
    this.setMessage({ message, customMessage });


    const expression = v => v === expect;

    return this.processAssertion(
      value,
      expression,
      () => this.throwError(...arguments),
    );
  }

  throws(expression, expectedErrorClass?: InstanceClass, customMessage?: string): void | boolean {
    const operatorIsApplied = this.opts.operators?.is || false;
    let throwedError: { message?: string } | undefined = undefined;
    let expressionResult;

    try {
      expressionResult = expression();
    } catch (error) {
      throwedError = error;
    }


    if (throwedError) {
      let isRightInstance = !expectedErrorClass || throwedError instanceof expectedErrorClass;

      if (this.opts.operators?.not) {
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
      if (this.opts.operators?.not) {
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
      const prefix = this.opts.operators?.not ? 'not' : '';
      return MessageBuilder.expected(`${prefix} to throw ${expectedErrorStr}`, '{1}');
    })();

    this.setMessage({ message, customMessage });
    this.throwError(expressionResult, expectedErrorClass);
  }



  private processAssertion(
    value,
    assertExpression: (v: unknown) => boolean,
    throwError: () => void,
  ): void | boolean {

    const operatorIsApplied = this.opts.operators?.is || false;


    try {

      this.processNullOrOperator(value);
      this.processAllOperator(value, assertExpression, throwError);


      let condition = assertExpression(value);

      if (this.opts.operators?.not) {
        condition = !condition;
      }

      if (!condition) {
        throwError();
      }
    } catch (error) {

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


  private processNullOrOperator(value) {
    if (this.opts.operators?.nullOr && TypeHelper.isUndefined(value)) {
      throw new ExitFunctionError();
    }
  }

  private processAllOperator(
    array,
    assertExpression: (v) => boolean,
    throwError: () => void,
  ) {
    if (!this.opts.operators?.all) {
      return;
    }


    const Instance: AssertType = this.newInstance;
    Instance.array(array);

    array.forEach((value, index) => {
      const condition = assertExpression(value);

      if (!condition) {
        this.opts.message += ` (item #${index})`;
        throwError();
      }
    });

    throw new ExitFunctionError();
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



  private throwError(...params: any[]) {
    let message = this.opts.customMessage ?? this.opts.message;
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

    throw new WebUtilsAssertionError(message, !!this.opts.customMessage);
  }
}


// @ts-ignore
export const Assert: AssertType = new AssertClass();
