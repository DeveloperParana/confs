import { sharedProjectDataAccess } from './shared-project-data-access';

describe('sharedProjectDataAccess', () => {
  it('should work', () => {
    expect(sharedProjectDataAccess()).toEqual('shared-project-data-access');
  });
});
