import readPackage from '../index'

describe('test readPackage',() => {
  it('returns version line', () => {
    expect(readPackage()).toEqual('1.0.0');
  });

});
