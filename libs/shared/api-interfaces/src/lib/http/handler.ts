import { Observable } from 'rxjs';
import { HttpRequest } from './request';
import { HttpEvent } from './response';

export interface HttpHandler {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
}
