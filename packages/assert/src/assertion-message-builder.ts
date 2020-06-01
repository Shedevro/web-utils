export abstract class MsgBuilder {

  static expected(expected: string, actual?: string) {
    const gotLine = actual ? `. Got: ${actual}` : '';
    return `expected ${expected.trim()}${gotLine}`;
  }

  static expectedValue(expected: string, actual?: string) {
    return this.expected(`value ${expected.trim()}`, actual);
  }

  static expectedToBe(expected: string, actual?: string) {
    return this.expectedValue(`to be ${expected.trim()}`, actual);
  }
}
