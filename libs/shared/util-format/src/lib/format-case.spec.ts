import { toCamelCase } from './format-case';

describe('sharedUtilFormat', () => {
  it('should work', () => {
    expect(toCamelCase('access_token')).toEqual('accessToken');
  });
});
