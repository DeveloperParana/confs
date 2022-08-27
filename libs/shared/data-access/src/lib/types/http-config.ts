export type HttpConfig<T = unknown> = Omit<RequestInit, 'body'> & {
  queryParams?: URLSearchParams | Record<string, string>;
  body?: T;
};
