import {WebUtilsAssertionError} from './assertion.error';


describe('Assertion error test', () => {

  it('should throw error without options ', () => {
    expect(new WebUtilsAssertionError().customMessageApplied).toEqual(false);
    expect(new WebUtilsAssertionError({}).customMessageApplied).toEqual(false);
    expect(new WebUtilsAssertionError({ customMessageApplied: true }).customMessageApplied).toEqual(true);
  });
});
