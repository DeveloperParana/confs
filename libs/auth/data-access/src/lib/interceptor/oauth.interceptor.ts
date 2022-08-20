import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from '../infrastructure/oauth.service';

@Injectable()
export class OAuthInterceptor implements HttpInterceptor {
  constructor(private oauthService: OAuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isGithubApi = request.url.includes('api.github.com');

    console.log(request.url);

    if (isGithubApi) {
      const accessToken = this.oauthService.getAccessTokenFromStorage();

      request = request.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
      });
    }

    return next.handle(request);
  }
}
