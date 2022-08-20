import { TestBed } from '@angular/core/testing';

import { OAuthInterceptor } from './oauth.interceptor';

describe('OAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OAuthInterceptor = TestBed.inject(OAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
