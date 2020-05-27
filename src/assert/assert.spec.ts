import * as Assert from './assert';
import {WebUtilsAssertionError} from './assertion.error';


describe('Assertion test: number', () => {

  it('should return undefined if string value provided', () => {
    expect(Assert.string('some string')).toBeUndefined();
  });
  it('should throw error if not string value provided', () => {
    expect(() => Assert.string(123)).toThrow(WebUtilsAssertionError);
  });

  it('should return undefined if null or string provided', () => {
    expect(Assert.nullOrString('some string')).toBeUndefined();
    expect(Assert.nullOrString(null)).toBeUndefined();
  });

  it('should return undefined if not empty string provided', () => {
    expect(Assert.notEmptyString('some string')).toBeUndefined();
  });
  it('should throw error if empty string provided', () => {
    expect(() => Assert.notEmptyString(null)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.notEmptyString('')).toThrow(WebUtilsAssertionError);
    expect(() => Assert.notEmptyString('  ')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: number', () => {

  it('should return undefined if number provided', () => {
    expect(Assert.number(123)).toBeUndefined();
  });
  it('should throw error if not number provided', () => {
    expect(() => Assert.number(true)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: boolean', () => {

  it('should return undefined if boolean provided', () => {
    expect(Assert.boolean(true)).toBeUndefined();
  });
  it('should throw error if not boolean provided', () => {
    expect(() => Assert.boolean(123)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: object', () => {

  it('should return undefined if object provided', () => {
    expect(Assert.object({ name: 'John' })).toBeUndefined();
  });

  it('should throw error if not object provided', () => {
    expect(() => Assert.object([])).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: array', () => {

  it('should return undefined if array provided', () => {
    expect(Assert.array([0, 1, 2])).toBeUndefined();
  });
  it('should throw error if not array provided', () => {
    expect(() => Assert.array('some array')).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: instance', () => {

  it('should return undefined if right instance class provided', () => {
    expect(Assert.instanceOf([], Array)).toBeUndefined();
  });
  it('should throw error if not right instance class provided', () => {
    expect(() => Assert.instanceOf({}, Array)).toThrow(WebUtilsAssertionError);
    expect(() => Assert.instanceOf(123, Array)).toThrow(WebUtilsAssertionError);
  });

  it('should return undefined if null or right instance class provided', () => {
    expect(Assert.nullOrInstanceOf(undefined, Array)).toBeUndefined();
    expect(Assert.nullOrInstanceOf([], Array)).toBeUndefined();
  });

  it('should return undefined if all right instances class provided', () => {
    expect(Assert.allInstancesOf([new Error(), new Error()], Error)).toBeUndefined();
  });
  it('should throw error if some provided instance classes not right', () => {
    expect(() => Assert.allInstancesOf([[], new Error()], Error)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: others', () => {

  it('should return undefined if value defined', () => {
    expect(Assert.defined('defined value')).toBeUndefined();
    expect(() => Assert.defined(null)).toThrow(WebUtilsAssertionError);
  });
  it('should throw error if value defined', () => {
    expect(() => Assert.defined(null)).toThrow(WebUtilsAssertionError);
  });

  it('should return undefined if values are equal', () => {
    expect(Assert.equal(123, 123)).toBeUndefined();
  });
  it('should throw error if values are not equal', () => {
    expect(() => Assert.equal(123, 321)).toThrow(WebUtilsAssertionError);
  });
});


describe('Assertion test: types', () => {
  [
    { type: 'string', value: 'some string' },
    { type: 'number', value: 123 },
    { type: 'boolean', value: true },
    { type: 'function', value: () => 1 },
    { type: 'object', value: { name: 'John' } },
    { type: 'array', value: [0, 1, 2] },
    { type: 'defined', value: 'some value' },
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
