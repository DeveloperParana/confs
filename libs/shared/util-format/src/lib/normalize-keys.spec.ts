import {normalizeKeys} from './normalize-keys';

const example = {
  access_token: 'token',
  token_type: 'type',
};

describe('normalize keys', () => {
  const response = {
    accessToken: 'token',
    tokenType: 'type',
  };

  it('normalize access token response', () => {
    const value = normalizeKeys(example);
    expect(value).toStrictEqual(response);
  });
});
