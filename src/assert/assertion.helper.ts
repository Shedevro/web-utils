import {isArray, isObject} from './assert';
import {WebUtilsAssertionError} from './assertion.error';

export abstract class AssertionHelper {

  static typeOf(value) {
    switch (true) {
      case isObject(value):
        return 'object';
      case isArray(value):
        return 'array';
      default:
        return typeof value;
    }
  }


  static valueToString(value): string {
    switch (this.typeOf(value)) {
      case 'array':
        return `[${value.map(v => this.valueToString(v)).join(', ')}]`;
      case 'string':
        return `"${value}"`;
      case 'function':
        return `Function.${value.name}`;
      default:
        return String(value);
    }
  }


  static throwError(
    originalMessage: string,
    params?: any,
    customMessage?: string,
  ) {
    params = isArray(params) ? params : [params];
    const message = (customMessage ?? originalMessage).replace(
      /{\d+}/g,
      propPos => params[Number(propPos.replace(/\D/g, '')) - 1] || '',
    );

    throw new WebUtilsAssertionError(message, !!customMessage);
  }


  static getExpectedMsg(expected: string, actual?: string) {
    const gotLine = actual ? `. Got: ${actual}` : '';
    return `expected value to be ${expected}${gotLine}`;
  };
}
