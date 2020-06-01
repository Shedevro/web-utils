import {Assert} from './assert';
import {WebUtilsAssertionError} from './assertion.error';


describe('Assert: string', () => {

  it(Assert.string.name, () => {
    expect(Assert.string('some string')).toBeUndefined();
    expect(Assert.nullOr.string(null)).toBeUndefined();
    expect(() => Assert.string(123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.emptyString.name, () => {
    expect(Assert.emptyString('  ')).toBeUndefined();
    expect(Assert.not.emptyString('some string')).toBeUndefined();
    expect(Assert.nullOr.emptyString(null)).toBeUndefined();
    expect(Assert.nullOr.not.emptyString(null)).toBeUndefined();
    expect(() => Assert.emptyString(null)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.emptyString('  ')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.contains.name, () => {
    expect(Assert.contains('some string', 'str')).toBeUndefined();
    expect(Assert.not.contains('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.contains(null, 'qwerty')).toBeUndefined();
    expect(() => Assert.contains('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.contains('some string', 'som')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.startsWith.name, () => {
    expect(Assert.startsWith('some string', 'so')).toBeUndefined();
    expect(Assert.not.startsWith('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.startsWith(null, 'qwerty')).toBeUndefined();
    expect(() => Assert.startsWith('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.startsWith('some string', 'some')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.endsWith.name, () => {
    expect(Assert.endsWith('some string', 'ing')).toBeUndefined();
    expect(Assert.not.endsWith('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.endsWith(null, 'qwerty')).toBeUndefined();
    expect(() => Assert.endsWith('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.endsWith('some string', 'ing')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: number', () => {

  it(Assert.number.name, () => {
    expect(Assert.number(123)).toBeUndefined();
    expect(Assert.nullOr.number(null)).toBeUndefined();
    expect(() => Assert.number([])).toThrow(WebUtilsAssertionError);
  });

  it(Assert.natural.name, () => {
    expect(Assert.natural(123, 'custom message')).toBeUndefined();
    expect(Assert.natural(0)).toBeUndefined();
    expect(Assert.nullOr.natural(null)).toBeUndefined();
    expect(() => Assert.natural(-123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.greaterThan.name, () => {
    expect(Assert.greaterThan(2, 1)).toBeUndefined();
    expect(Assert.nullOr.greaterThan(null, 1)).toBeUndefined();
    expect(() => Assert.greaterThan(1, 2)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.greaterThanOrEqual.name, () => {
    expect(Assert.greaterThanOrEqual(2, 1)).toBeUndefined();
    expect(Assert.greaterThanOrEqual(2, 2)).toBeUndefined();
    expect(Assert.nullOr.greaterThanOrEqual(null, 1)).toBeUndefined();
    expect(() => Assert.greaterThanOrEqual(1, 2)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.lessThan.name, () => {
    expect(Assert.lessThan(1, 2)).toBeUndefined();
    expect(Assert.nullOr.lessThan(null, 1)).toBeUndefined();
    expect(() => Assert.lessThan(2, 1)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.lessThanOrEqual.name, () => {
    expect(Assert.lessThanOrEqual(1, 2)).toBeUndefined();
    expect(Assert.lessThanOrEqual(2, 2)).toBeUndefined();
    expect(Assert.nullOr.lessThanOrEqual(null, 1)).toBeUndefined();
    expect(() => Assert.lessThanOrEqual(2, 1)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.range.name, () => {
    expect(Assert.range(10, 3, 12)).toBeUndefined();
    expect(Assert.range(10, 10, 10)).toBeUndefined();
    expect(Assert.nullOr.range(null, 1, 10)).toBeUndefined();
    expect(() => Assert.range(10, 3, 9)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: boolean', () => {

  it(Assert.boolean.name, () => {
    expect(Assert.boolean(true)).toBeUndefined();
    expect(Assert.boolean(false)).toBeUndefined();
    expect(Assert.nullOr.boolean(null)).toBeUndefined();
    expect(() => Assert.boolean(123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.true.name, () => {
    expect(Assert.true(true)).toBeUndefined();
    expect(Assert.nullOr.true(null)).toBeUndefined();
    expect(() => Assert.true('some value')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.false.name, () => {
    expect(Assert.false(false)).toBeUndefined();
    expect(Assert.nullOr.false(null)).toBeUndefined();
    expect(() => Assert.false('some value')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: object', () => {

  it(Assert.object.name, () => {
    expect(Assert.object({ name: 'John' })).toBeUndefined();
    expect(Assert.nullOr.object(null)).toBeUndefined();
    expect(() => Assert.object([])).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: array', () => {

  it(Assert.array.name, () => {
    expect(Assert.array([0, 1, 2])).toBeUndefined();
    expect(Assert.nullOr.array(null)).toBeUndefined();
    expect(() => Assert.array('some array')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.oneOf.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.oneOf('two', array)).toBeUndefined();
    expect(Assert.not.oneOf('four', array)).toBeUndefined();
    expect(Assert.nullOr.oneOf(null, array)).toBeUndefined();
    expect(() => Assert.oneOf('four', array)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.oneOf('two', array)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.arrayLength.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.arrayLength(array, 3)).toBeUndefined();
    expect(Assert.nullOr.arrayLength(null, 3)).toBeUndefined();
    expect(() => Assert.arrayLength(array, 5)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.arrayLength(null, 5, 'custom message')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.arrayMinLength.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.arrayMinLength(array, 2)).toBeUndefined();
    expect(Assert.nullOr.arrayMinLength(null, 3)).toBeUndefined();
    expect(() => Assert.arrayMinLength(array, 5)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.arrayMinLength(null, 5, 'custom message')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.arrayMaxLength.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.arrayMaxLength(array, 3)).toBeUndefined();
    expect(Assert.nullOr.arrayMaxLength(null, 3)).toBeUndefined();
    expect(() => Assert.arrayMaxLength(array, 1)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.arrayMaxLength(null, 1, 'custom message')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.arrayLengthBetween.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.arrayLengthBetween(array, 0, 3)).toBeUndefined();
    expect(Assert.nullOr.arrayLengthBetween(null, 0, 1)).toBeUndefined();
    expect(() => Assert.arrayLengthBetween(array, 1, 2)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.arrayLengthBetween(null, 1, 2, 'custom message')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: instance', () => {

  it(Assert.instanceOf.name, () => {
    expect(Assert.instanceOf([], Array)).toBeUndefined();
    expect(Assert.not.instanceOf({}, Array)).toBeUndefined();
    expect(Assert.nullOr.instanceOf(null, Array)).toBeUndefined();
    expect(() => Assert.instanceOf({}, Array)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.instanceOf([], Array)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.instanceOfAny.name, () => {
    const classes = [Error, Array];
    expect(Assert.instanceOfAny([], classes)).toBeUndefined();
    expect(Assert.not.instanceOfAny(new Date(), classes)).toBeUndefined();
    expect(Assert.nullOr.instanceOfAny(null, classes)).toBeUndefined();
    expect(() => Assert.instanceOfAny(new Date(), classes)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.instanceOfAny(new Error(), classes)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.allAreInstanceOf.name, () => {
    expect(Assert.allAreInstanceOf([new Error(), new Error()], Error)).toBeUndefined();
    expect(Assert.nullOr.allAreInstanceOf(null, Error)).toBeUndefined();
    expect(() => Assert.allAreInstanceOf([[], new Error()], Error)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: others', () => {

  it(Assert.defined.name, () => {
    expect(Assert.defined('defined value')).toBeUndefined();
    expect(Assert.not.defined(undefined)).toBeUndefined();
    expect(() => Assert.defined(null)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.equal.name, () => {
    expect(Assert.equal(123, 123)).toBeUndefined();
    expect(Assert.not.equal(123, 321)).toBeUndefined();
    expect(Assert.nullOr.equal(null, 321)).toBeUndefined();
    expect(() => Assert.equal(123, 321)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.equal(123, 123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.throws.name, () => {

    const throwError = () => {
      throw new RangeError('some error');
    };

    const returnSomething = () => {
      return 123;
    };

    expect(() => {
      Assert.throws(() => throwError());
    }).not.toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => throwError(), RangeError);
    }).not.toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => throwError(), TypeError);
    }).toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => returnSomething());
    }).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: types', () => {
  [
    { type: 'string', value: 'some string' },
    { type: 'number', value: 123 },
    { type: 'boolean', value: true },
    { type: 'function', value: () => 1 },
    { type: 'object', value: { name: 'John' } },
    { type: 'array', value: [0, 1, 2] },
    { type: 'defined', value: 'some value' },
    { type: 'undefined', value: null },
  ].map(({ type, value }) => {
    const fnName = `is${type[0].toUpperCase()}${type.slice(1)}`;
    const itMessage = `should return true if value is ${type}`;
    return {
      itMessage,
      value,
      fnName,
    };
  }).forEach(({ itMessage, fnName, value }) => {
    it(itMessage, () => {
      expect(Assert[fnName](value)).toEqual(true);
    });
  });
});


describe('Assert: custom errors', () => {
  it('should throw error if empty custom message', () => {
    expect(() => Assert.string(123, '')).toThrow('message should be set');
    expect(() => Assert.string(123, '{3}')).toThrow();
  });
});
