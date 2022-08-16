import { sharedDataState } from './shared-data-state';

describe('sharedDataState', () => {
  it('should work', () => {
    expect(sharedDataState()).toEqual('shared-data-state');
  });
});
