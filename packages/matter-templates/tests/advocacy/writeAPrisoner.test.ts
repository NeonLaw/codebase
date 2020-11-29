import { WriteAPrisoner } from '../../src/advocacy/writeAPrisoner';

describe('Write a Prisoner matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new WriteAPrisoner(matterId))
      .toHaveProperty('matterId', matterId);
  });
});
