import { NevadaCCorp } from '../../src/nevada/cCorp';

describe('Nevada EDCR matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new NevadaCCorp(matterId))
      .toHaveProperty('matterId', matterId);
  });
});
