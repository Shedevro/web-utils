import {TypeHelper} from './type.helper';


describe('Type Helper', () => {

  it('typyOf must return proper value type ', () => {
    expect(TypeHelper.typeOf('some string')).toEqual('string');
    expect(TypeHelper.typeOf(123)).toEqual('number');
    expect(TypeHelper.typeOf(true)).toEqual('boolean');
    expect(TypeHelper.typeOf(() => 1)).toEqual('function');

    expect(TypeHelper.typeOf([])).toEqual('array');
    expect(TypeHelper.typeOf({})).toEqual('object');

    expect(TypeHelper.typeOf(NaN)).toEqual('undefined');
    expect(TypeHelper.typeOf(null)).toEqual('undefined');
    expect(TypeHelper.typeOf(null)).not.toEqual('object');
    expect(TypeHelper.typeOf(undefined)).toEqual('undefined');
  });
});
