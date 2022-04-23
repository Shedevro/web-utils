import {TypeHelper} from '@shedevro/core';

export abstract class AssertionHelper {

  static valueToString(value: unknown): string {

    if (TypeHelper.isArray(value)) {
      return `[${value.map(v => this.valueToString(v)).join(', ')}]`;
    }

    if (TypeHelper.isString(value)) {
      return value.startsWith('"') && value.endsWith('"')
        ? value
        : `"${value}"`;
    }

    if (TypeHelper.isFunction(value)) {
      return value.name || 'Function';
    }

    if (TypeHelper.isObject(value)) {
      return value.constructor.name;
    }

    return String(value);
  }
}
