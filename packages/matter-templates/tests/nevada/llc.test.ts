import { NevadaLLC } from '../../src/nevada/llc';

describe('Nevada LLC matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new NevadaLLC(matterId)).toHaveProperty('matterId', matterId);
  });
});
