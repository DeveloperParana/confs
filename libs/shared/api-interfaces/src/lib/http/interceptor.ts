import { HttpHandler } from './handler';
import { HttpRequest } from './request';
import { HttpEvent } from './response';
import { Observable } from 'rxjs';

export interface HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>>;
}
