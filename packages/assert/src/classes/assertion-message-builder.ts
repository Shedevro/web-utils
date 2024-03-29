export abstract class MessageBuilder {

  static expected(expected: string, actual?: string): string {
    const gotLine = actual ? `. Got: ${actual}` : '';
    return `expected ${expected.trim()}${gotLine}`;
  }

  static expectedValue(expected: string, actual?: string): string {
    return this.expected(`value ${expected.trim()}`, actual);
  }

  static expectedToBe(expected: string, actual?: string): string {
    return this.expectedValue(`to be ${expected.trim()}`, actual);
  }
}
