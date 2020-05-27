import {AssertionHelper} from './assertion.helper';


describe('Assertion helpert test', () => {

  it('should resolve type of [] as array', () => {
    expect(AssertionHelper.typeOf([1, 2, 3])).toEqual('array');
  });

  it('should resolve type of {} as object', () => {
    expect(AssertionHelper.typeOf({ name: 'John' })).toEqual('object');
  });

  it('should resolve type of 123 as number', () => {
    expect(AssertionHelper.typeOf(123)).toEqual('number');
  });

  it('throwError() should throw error with custom props', () => {
    expect(() =>
      AssertionHelper.throwError(
        AssertionHelper.getExpectedMsg('string', '{1}'), [123],
        'Value should be string, but got {1}',
      ),
    ).toThrow('Value should be string, but got 123');
  });

  it('throwError() should throw error with custom props with not mutched pattern', () => {
    expect(() =>
      AssertionHelper.throwError(
        AssertionHelper.getExpectedMsg('string', '{1}'), [123],
        'Value should be string, but got {3}',
      ),
    ).toThrow('Value should be string, but got ');
  });

  it('throwError() should throw error with not pattern in message', () => {
    expect(() =>
      AssertionHelper.throwError(
        AssertionHelper.getExpectedMsg('string', '{1}'), [123],
        'Value should be string, but got',
      ),
    ).toThrow('Value should be string, but got');
  });
});
