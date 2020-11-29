import { Base } from '../src/base';

describe('Base matter template class', () => {
  it('can be initialized with a matter Id', () => {
    const matterId = '1';

    expect(new Base(matterId)).toHaveProperty('matterId', matterId);
  });
});
