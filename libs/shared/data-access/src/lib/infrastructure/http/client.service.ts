import {
  HttpRequest,
  HttpEvent,
  HttpContext,
  HttpHandler,
  HttpOptionsParams,
  HttpOptionsHeaders,
} from '@confs/shared/api-interfaces';
import {Observable} from 'rxjs';

export abstract class HttpClientService {
  abstract handler: HttpHandler;

  abstract request<R>(req: HttpRequest<any>): Observable<HttpEvent<R>>;
  abstract request<R>(
    method: string,
    url: string,
    options?: {
      body?: any;
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      responseType?: 'json';
      reportProgress?: boolean;
      withCredentials?: boolean;
    }
  ): Observable<R>;

  abstract delete(
    url: string,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
      body?: any | null;
    }
  ): Observable<Record<any, any>>;
  abstract delete<T>(
    url: string,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
      body?: any | null;
    }
  ): Observable<T>;

  abstract get(
    url: string,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    }
  ): Observable<ArrayBuffer>;
  abstract get(
    url: string,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    }
  ): Observable<Blob>;
  abstract get(
    url: string,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'text';
      withCredentials?: boolean;
    }
  ): Observable<string>;
  abstract get<T>(
    url: string,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;

  abstract head<T>(
    url: string,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;

  abstract jsonp(url: string, callbackParam: string): Observable<object>;
  abstract jsonp<T>(url: string, callbackParam: string): Observable<T>;

  abstract options<T>(
    url: string,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;

  abstract patch(
    url: string,
    body: any | null,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    }
  ): Observable<ArrayBuffer>;
  abstract patch<T>(
    url: string,
    body: any | null,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;

  abstract post(
    url: string,
    body: any | null,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    }
  ): Observable<ArrayBuffer>;
  abstract post(
    url: string,
    body: any | null,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    }
  ): Observable<Blob>;
  abstract post<T>(
    url: string,
    body: any | null,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;

  abstract put(
    url: string,
    body: any | null,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'arraybuffer';
      withCredentials?: boolean;
    }
  ): Observable<ArrayBuffer>;
  abstract put(
    url: string,
    body: any | null,
    options: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType: 'blob';
      withCredentials?: boolean;
    }
  ): Observable<Blob>;
  abstract put<T>(
    url: string,
    body: any | null,
    options?: {
      headers?: HttpOptionsHeaders;
      context?: HttpContext;
      observe?: 'body';
      params?: HttpOptionsParams;
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T>;
}
