import { HttpContext } from './context';
import { HttpHeaders } from './headers';
import { HttpParams } from './params';

export interface HttpRequest<T> {
  readonly url: string;
  readonly body: T | null;
  readonly headers: HttpHeaders;
  readonly context: HttpContext;
  readonly reportProgress: boolean;
  readonly withCredentials: boolean;
  readonly responseType: 'arraybuffer' | 'blob' | 'json' | 'text';
  readonly method: string;
  readonly params: HttpParams;
  readonly urlWithParams: string;
  new (
    method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS',
    url: string,
    init?: {
      headers?: HttpHeaders;
      context?: HttpContext;
      reportProgress?: boolean;
      params?: HttpParams;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ): this;
  new (
    method: 'POST' | 'PUT' | 'PATCH',
    url: string,
    body: T | null,
    init?: {
      headers?: HttpHeaders;
      context?: HttpContext;
      reportProgress?: boolean;
      params?: HttpParams;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ): this;
  new (
    method: string,
    url: string,
    body: T | null,
    init?: {
      headers?: HttpHeaders;
      context?: HttpContext;
      reportProgress?: boolean;
      params?: HttpParams;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ): this;
  serializeBody(): ArrayBuffer | Blob | FormData | string | null;
  detectContentTypeHeader(): string | null;
  clone(): HttpRequest<T>;
  clone(update: {
    headers?: HttpHeaders;
    context?: HttpContext;
    reportProgress?: boolean;
    params?: HttpParams;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
    body?: T | null;
    method?: string;
    url?: string;
    setHeaders?: {
      [name: string]: string | string[];
    };
    setParams?: {
      [param: string]: string;
    };
  }): HttpRequest<T>;
  clone<V>(update: {
    headers?: HttpHeaders;
    context?: HttpContext;
    reportProgress?: boolean;
    params?: HttpParams;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
    body?: V | null;
    method?: string;
    url?: string;
    setHeaders?: {
      [name: string]: string | string[];
    };
    setParams?: {
      [param: string]: string;
    };
  }): HttpRequest<V>;
}
