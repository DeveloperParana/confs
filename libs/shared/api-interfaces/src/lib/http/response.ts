import { HttpHeaders } from './headers';

export enum HttpEventType {
  Sent,
  UploadProgress,
  ResponseHeader,
  DownloadProgress,
  Response,
  User,
}

export interface HttpProgressEvent {
  type: HttpEventType.DownloadProgress | HttpEventType.UploadProgress;
  loaded: number;
  total?: number;
}
export interface HttpSentEvent {
  type: HttpEventType.Sent;
}

export interface HttpUserEvent<T> {
  type: HttpEventType.User;
}
export type HttpEvent<T> =
  | HttpSentEvent
  | HttpHeaderResponse
  | HttpResponse<T>
  | HttpProgressEvent
  | HttpUserEvent<T>;

export interface HttpResponseBase {
  readonly headers: HttpHeaders;

  readonly status: number;

  readonly statusText: string;
  readonly url: string | null;
  readonly ok: boolean;
  readonly type: HttpEventType.Response | HttpEventType.ResponseHeader;
  new (
    init: {
      headers?: HttpHeaders;
      status?: number;
      statusText?: string;
      url?: string;
    },
    defaultStatus: number,
    defaultStatusText: string
  ): this;
}

export interface HttpErrorResponse extends HttpResponseBase, Error {
  readonly name: 'HttpErrorResponse';
  readonly message: string;
  readonly error: any | null;
  readonly ok: false;

  new (init: {
    error?: Error;
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): this;
}

export interface HttpHeaderResponse extends HttpResponseBase {
  new (init: {
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): this;

  readonly type: HttpEventType.ResponseHeader;

  clone(update: {
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): HttpHeaderResponse;
}

export interface HttpResponse<T> extends HttpResponseBase {
  /**
   * The response body, or `null` if one was not returned.
   */
  readonly body: T | null;

  /**
   * Construct a new `HttpResponse`.
   */
  new (init: {
    body?: T | null;
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): this;

  readonly type: HttpEventType.Response;

  clone(): HttpResponse<T>;
  clone(update: {
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): HttpResponse<T>;
  clone<V>(update: {
    body?: V | null;
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): HttpResponse<V>;
  clone(update: {
    body?: any | null;
    headers?: HttpHeaders;
    status?: number;
    statusText?: string;
    url?: string;
  }): HttpResponse<any>;
}
