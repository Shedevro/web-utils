import { WebUtilsAssertionError } from './assertion.error';


describe('Assertion error test', () => {

  it('should care right values after initialization', () => {
    expect(new WebUtilsAssertionError('some error').toString()).toEqual('WebUtilsAssertionError: some error');
    expect(new WebUtilsAssertionError('').toString()).toEqual('WebUtilsAssertionError');
    expect(new WebUtilsAssertionError('').customMessageApplied).toBeFalsy();
    expect(new WebUtilsAssertionError('some error', true).customMessageApplied).toEqual(true);
  });
});
