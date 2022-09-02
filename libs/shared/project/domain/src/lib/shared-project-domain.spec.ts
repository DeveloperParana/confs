import { sharedProjectDomain } from './shared-project-domain';

describe('sharedProjectDomain', () => {
  it('should work', () => {
    expect(sharedProjectDomain()).toEqual('shared-project-domain');
  });
});
