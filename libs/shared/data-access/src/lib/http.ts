import { Observable } from 'rxjs';

export interface TotalLoaded {
  total: number;
  loaded: number;
}

export type HttpConfig<T = unknown> = Omit<RequestInit, 'body'> & {
  queryParams?: URLSearchParams | Record<string, string>;
  body?: T;
};

export abstract class Http {
  abstract transfer<B>(
    url: string,
    config?: HttpConfig<B>
  ): Observable<TotalLoaded>;

  abstract request<R, B>(url: string, config?: HttpConfig<B>): Observable<R>;

  abstract get<R>(url: string, headers?: Record<string, string>): Observable<R>;

  abstract post<R, B>(
    url: string,
    body: B,
    headers?: Record<string, string>
  ): Observable<R>;

  abstract put<R, B>(
    url: string,
    body?: B,
    headers?: Record<string, string>
  ): Observable<R>;

  abstract patch<B>(
    url: string,
    body?: B,
    headers?: Record<string, string>
  ): Observable<void>;

  abstract delete<R, B>(
    url: string,
    body?: B,
    headers?: Record<string, string>
  ): Observable<R>;
}
