export const requiredDocuments = [

];
import { NevadaDataDeletion } from '../../src/nevada/dataDeletion';

describe('Nevada EDCR matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new NevadaDataDeletion(matterId))
      .toHaveProperty('matterId', matterId);
  });
});
