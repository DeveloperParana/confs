import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { Http } from '../http';
import { TotalLoaded } from "../types/total-loaded";
import { HttpConfig } from "../types/http-config";
import { ajaxResponse, totalLoaded } from '../utilities';

export class HttpService implements Http {
  transfer<B>(url: string, config?: HttpConfig<B>) {
    return ajax<TotalLoaded>({ url, ...config }).pipe(map(totalLoaded));
  }

  request<R, B>(url: string, config?: HttpConfig<B>) {
    return ajax<R>({ url, ...config }).pipe(map(ajaxResponse));
  }

  get<R>(url: string, headers?: Record<string, string>) {
    return this.request<R, void>(url, { headers, method: 'GET' });
  }

  post<R, B = unknown>(url: string, body: B, headers?: Record<string, string>) {
    return this.request<R, B>(url, { body, headers, method: 'POST' });
  }

  put<R, B>(url: string, body: B, headers?: Record<string, string>) {
    return this.request<R, B>(url, { body, headers, method: 'PUT' });
  }

  patch<R, B>(url: string, body: B, headers?: Record<string, string>) {
    return this.request<R, B>(url, { body, headers, method: 'PATCH' });
  }

  delete<R, B>(url: string, body: B, headers?: Record<string, string>) {
    return this.request<R, B>(url, {
      body,
      headers,
      method: 'DELETE',
    });
  }
}
