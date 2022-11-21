export interface HttpContextToken<T> {
  new (defaultValue: () => T): this;
}

export interface HttpContext {
  readonly map: Map<HttpContextToken<unknown>, unknown>;

  set<T>(token: HttpContextToken<T>, value: T): HttpContext;
  get<T>(token: HttpContextToken<T>): T;
  delete(token: HttpContextToken<unknown>): HttpContext;
  has(token: HttpContextToken<unknown>): boolean;
  keys(): IterableIterator<HttpContextToken<unknown>>;
}
