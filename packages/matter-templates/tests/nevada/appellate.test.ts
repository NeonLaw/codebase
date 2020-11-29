import { NevadaAppellate } from '../../src/nevada/appellate';

describe('Nevada Appellate matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new NevadaAppellate(matterId))
      .toHaveProperty('matterId', matterId);
  });
});
