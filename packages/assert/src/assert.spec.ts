/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {Assert} from './assert';
import {WebUtilsAssertionError} from './classes/error/assertion.error';


describe('Assert: string', () => {

  it(Assert.string.name, () => {
    expect(Assert.string('some string')).toBeUndefined();
    expect(Assert.nullOr.string(null)).toBeUndefined();
    expect(Assert.all.string(['q', 'w', 'e'])).toBeUndefined();
    expect(() => Assert.string(() => 1)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.all.string(['q', 123, 'w'])).toThrow(WebUtilsAssertionError);

    expect(Assert.is.string('some string')).toEqual(true);
    expect(Assert.is.nullOr.string(null)).toEqual(true);
    expect(Assert.is.all.string(['q', 'w', 'e'])).toEqual(true);
    expect(Assert.is.string(() => 1)).toEqual(false);
    expect(Assert.is.all.string(['q', 123, 'w'])).toEqual(false);
  });

  it(Assert.emptyString.name, () => {
    expect(Assert.emptyString('')).toBeUndefined();
    expect(Assert.emptyString('  ')).toBeUndefined();
    expect(() => Assert.emptyString(null)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.emptyString(1)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.emptyString('string')).toThrow(WebUtilsAssertionError);

    expect(Assert.not.emptyString('some string')).toBeUndefined();
    expect(() => Assert.not.emptyString('  ')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.emptyString(null)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.emptyString(1)).toThrow(WebUtilsAssertionError);

    expect(Assert.nullOr.emptyString(null)).toBeUndefined();
    expect(Assert.nullOr.not.emptyString(null)).toBeUndefined();
    expect(Assert.all.emptyString(['', '', ''])).toBeUndefined();
  });

  it(Assert.contains.name, () => {
    expect(Assert.contains('some string', 'str')).toBeUndefined();
    expect(Assert.not.contains('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.contains(null, 'qwerty')).toBeUndefined();
    expect(Assert.all.contains(['some a', 'some b', 'some a'], 'me ')).toBeUndefined();
    expect(() => Assert.contains('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.contains('some string', 'som')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.startsWith.name, () => {
    expect(Assert.startsWith('some string', 'so')).toBeUndefined();
    expect(Assert.not.startsWith('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.startsWith(null, 'qwerty')).toBeUndefined();
    expect(Assert.all.startsWith(['some a', 'some b', 'some a'], 'so')).toBeUndefined();
    expect(() => Assert.startsWith('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.startsWith('some string', 'some')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.endsWith.name, () => {
    expect(Assert.endsWith('some string', 'ing')).toBeUndefined();
    expect(Assert.not.endsWith('some string', 'qwerty')).toBeUndefined();
    expect(Assert.nullOr.endsWith(null, 'qwerty')).toBeUndefined();
    expect(Assert.all.endsWith(['some a qwe', 'some b qwe', 'some a qwe'], ' qwe')).toBeUndefined();
    expect(() => Assert.endsWith('some string', 'qw')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.endsWith('some string', 'ing')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.oneOf.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.oneOf('two', array)).toBeUndefined();
    expect(Assert.not.oneOf('four', array)).toBeUndefined();
    expect(Assert.nullOr.oneOf(null, array)).toBeUndefined();
    expect(() => Assert.oneOf('four', array)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.oneOf('two', array)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: number', () => {

  it(Assert.number.name, () => {
    expect(Assert.number(123)).toBeUndefined();
    expect(Assert.nullOr.number(null)).toBeUndefined();
    expect(Assert.all.number([0, 1, 2])).toBeUndefined();
    expect(() => Assert.number({})).toThrow(WebUtilsAssertionError);
  });

  it(Assert.natural.name, () => {
    expect(Assert.natural(123, 'custom message')).toBeUndefined();
    expect(Assert.natural(0)).toBeUndefined();
    expect(Assert.nullOr.natural(null)).toBeUndefined();
    expect(Assert.all.natural([0, 1, 2])).toBeUndefined();
    expect(() => Assert.natural(-123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.greaterThan.name, () => {
    expect(Assert.greaterThan(2, 1)).toBeUndefined();
    expect(Assert.nullOr.greaterThan(null, 1)).toBeUndefined();
    expect(Assert.all.greaterThan([10, 11, 12], 5)).toBeUndefined();
    expect(() => Assert.greaterThan(1, 2)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.greaterThanOrEqual.name, () => {
    expect(Assert.greaterThanOrEqual(2, 1)).toBeUndefined();
    expect(Assert.greaterThanOrEqual(2, 2)).toBeUndefined();
    expect(Assert.nullOr.greaterThanOrEqual(null, 1)).toBeUndefined();
    expect(Assert.all.greaterThanOrEqual([10, 11, 12], 10)).toBeUndefined();
    expect(() => Assert.greaterThanOrEqual(1, 2)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.lessThan.name, () => {
    expect(Assert.lessThan(1, 2)).toBeUndefined();
    expect(Assert.nullOr.lessThan(null, 1)).toBeUndefined();
    expect(Assert.all.lessThan([10, 11, 12], 20)).toBeUndefined();
    expect(() => Assert.lessThan(2, 1)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.lessThanOrEqual.name, () => {
    expect(Assert.lessThanOrEqual(1, 2)).toBeUndefined();
    expect(Assert.lessThanOrEqual(2, 2)).toBeUndefined();
    expect(Assert.nullOr.lessThanOrEqual(null, 1)).toBeUndefined();
    expect(Assert.all.lessThanOrEqual([10, 11, 12], 12)).toBeUndefined();
    expect(() => Assert.lessThanOrEqual(2, 1)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.range.name, () => {
    expect(Assert.range(10, 3, 12)).toBeUndefined();
    expect(Assert.range(10, 10, 10)).toBeUndefined();
    expect(Assert.nullOr.range(null, 1, 10)).toBeUndefined();
    expect(Assert.not.range(32, 1, 10)).toBeUndefined();
    expect(Assert.all.range([10, 11, 12], 2, 12)).toBeUndefined();
    expect(() => Assert.range(10, 3, 9)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: boolean', () => {

  it(Assert.boolean.name, () => {
    expect(Assert.boolean(true)).toBeUndefined();
    expect(Assert.boolean(false)).toBeUndefined();
    expect(Assert.nullOr.boolean(null)).toBeUndefined();
    expect(Assert.all.boolean([false, true, true])).toBeUndefined();
    expect(() => Assert.boolean(123)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.true.name, () => {
    expect(Assert.true(true)).toBeUndefined();
    expect(Assert.nullOr.true(null)).toBeUndefined();
    expect(Assert.all.true([true, true, true])).toBeUndefined();
    expect(() => Assert.true('some value')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.false.name, () => {
    expect(Assert.false(false)).toBeUndefined();
    expect(Assert.nullOr.false(null)).toBeUndefined();
    expect(Assert.all.false([false, false, false])).toBeUndefined();
    expect(() => Assert.false('some value')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: object', () => {

  it(Assert.object.name, () => {
    expect(Assert.object({ name: 'John' })).toBeUndefined();
    expect(Assert.nullOr.object(null)).toBeUndefined();
    expect(Assert.all.object([new Date(), {}, { name: 'John' }])).toBeUndefined();
    expect(() => Assert.object([])).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: function', () => {

  it(Assert.function.name, () => {
    expect(Assert.function(() => 1)).toBeUndefined();
    expect(Assert.nullOr.function(null)).toBeUndefined();
    expect(Assert.all.function([() => 123, () => 'value'])).toBeUndefined();
    expect(() => Assert.function(123)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: array', () => {

  it(Assert.array.name, () => {
    expect(Assert.array([0, 1, 2])).toBeUndefined();
    expect(Assert.nullOr.array(null)).toBeUndefined();
    expect(Assert.all.array([[1, 2, 4], ['a', 'b', 's']])).toBeUndefined();
    expect(() => Assert.array('some array')).toThrow(WebUtilsAssertionError);
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
    expect(Assert.arrayMinLength(array, 3)).toBeUndefined();
    expect(Assert.nullOr.arrayMinLength(null, 3)).toBeUndefined();
    expect(() => Assert.arrayMinLength(array, 5)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.arrayMinLength(null, 5, 'custom message')).toThrow(WebUtilsAssertionError);
  });

  it(Assert.arrayMaxLength.name, () => {
    const array = ['one', 'two', 'three'];
    expect(Assert.arrayMaxLength(array, 3)).toBeUndefined();
    expect(Assert.arrayMaxLength(array, 4)).toBeUndefined();
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
    expect(Assert.all.instanceOf([new Error(), new Error()], Error)).toBeUndefined();
    expect(() => Assert.instanceOf({}, Array)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.instanceOf([], Array)).toThrow(WebUtilsAssertionError);
  });

  it(Assert.instanceOfAny.name, () => {
    const classes = [Error, Array];
    expect(Assert.instanceOfAny([], classes)).toBeUndefined();
    expect(Assert.not.instanceOfAny(new Date(), classes)).toBeUndefined();
    expect(Assert.nullOr.instanceOfAny(null, classes)).toBeUndefined();
    expect(Assert.all.instanceOfAny([new Error(), []], classes)).toBeUndefined();
    expect(() => Assert.instanceOfAny(new Date(), classes)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.not.instanceOfAny(new Error(), classes)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: regexp', () => {

  it(Assert.match.name, () => {
    expect(Assert.match('1234', /123/)).toBeUndefined();
    expect(Assert.nullOr.match(null, /some regexp/)).toBeUndefined();
    expect(Assert.not.match('some number', /^\d+$/)).toBeUndefined();
    expect(Assert.all.match(['1', '123'], /[13]/)).toBeUndefined();
    expect(() => Assert.match(123, /123/)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.all.match([123, '123'], /[13]/)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.match('some string', /regexp/)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assert: others', () => {

  it(Assert.defined.name, () => {
    expect(Assert.defined('defined value')).toBeUndefined();
    expect(Assert.not.defined(undefined)).toBeUndefined();
    expect(Assert.all.defined(['some value', 1, new Date()])).toBeUndefined();
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

    const throwRangeError = () => {
      throw new RangeError('some error');
    };

    const throwSomeValue = () => {
      // eslint-disable-next-line no-throw-literal
      throw 'some error';
    };

    const returnSomething = () => {
      return 123;
    };

    expect(() => {
      Assert.throws(() => throwRangeError());
    }).not.toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => throwRangeError(), RangeError);
    }).not.toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.not.throws(() => returnSomething(), RangeError);
    }).not.toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => throwRangeError(), TypeError);
    }).toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.throws(() => returnSomething());
    }).toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.not.throws(() => throwRangeError(), RangeError);
    }).toThrow(WebUtilsAssertionError);

    expect(() => {
      Assert.not.throws(() => throwSomeValue());
    }).toThrow(WebUtilsAssertionError);


    // is operator
    expect(Assert.is.throws(() => throwRangeError(), RangeError)).toEqual(true);
    expect(Assert.is.throws(() => returnSomething())).toEqual(false);
    expect(Assert.is.not.throws(() => returnSomething())).toEqual(true);
  });
});


describe('Assert: custom errors', () => {
  it('should throw error if empty custom message', () => {
    expect(() => Assert.string(123, '')).toThrow('message should be set');
    expect(() => Assert.string(123, '{3}')).toThrow();
  });
});
