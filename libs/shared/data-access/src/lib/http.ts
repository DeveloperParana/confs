import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { extractAjaxResponse } from './utilities/extract-ajax-response';

export class Http {
  get<T>(url: string, headers?: Record<string, string>) {
    return ajax.get<T>(url, headers).pipe(map(extractAjaxResponse));
  }

  post<T, D>(url: string, body: D, headers?: Record<string, string>) {
    const req = ajax.post<T>(url, body, headers);
    return req.pipe(map(extractAjaxResponse));
  }

  put<T, D>(url: string, body: Partial<D>, headers?: Record<string, string>) {
    return ajax.put<T>(url, body, headers).pipe(map(extractAjaxResponse));
  }

  patch<T, D>(url: string, body: D, headers?: Record<string, string>) {
    return ajax.patch<T>(url, body, headers).pipe(map(extractAjaxResponse));
  }

  delete<T>(url: string, headers?: Record<string, string>) {
    return ajax.delete<T>(url, headers).pipe(map(extractAjaxResponse));
  }
}
