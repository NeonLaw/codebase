import { NevadaEDCR } from '../../src/nevada/edcr';

describe('Nevada EDCR matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new NevadaEDCR(matterId)).toHaveProperty('matterId', matterId);
  });
});
