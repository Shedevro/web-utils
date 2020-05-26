import * as nodeAssert from 'assert';
import * as Assert from './assert';

describe('Assert usage', () => {

  it('should throw error if the type is not a string', () => {
    nodeAssert.throws(() => Assert.string(123));
  });
});
