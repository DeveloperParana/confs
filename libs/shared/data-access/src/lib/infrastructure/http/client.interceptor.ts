import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@confs/shared/api-interfaces';
import {LoaderService} from '../loader.service';
import {finalize} from 'rxjs';

export class ClientInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.loaderService.show();

    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
