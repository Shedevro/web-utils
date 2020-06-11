import {TypeHelper} from '@shedevro/core';

export abstract class AssertionHelper {

  static valueToString(value): string {
    switch (TypeHelper.typeOf(value)) {
      case 'array':
        return `[${value.map(v => this.valueToString(v)).join(', ')}]`;
      case 'string':
        return value.startsWith('"') && value.endsWith('"')
          ? value
          : `"${value}"`;
      case 'function':
        return value.name || 'Function';
      case 'object':
        return value.name || value.constructor.name;
      default:
        return String(value);
    }
  }
}
