import { FederalDistrictOfNevada } from '../../src/federal/districtOfNevada';

describe('Federal District of Nevada matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new FederalDistrictOfNevada(matterId))
      .toHaveProperty('matterId', matterId);
  });
});
