export interface HttpParameterCodec {
  encodeKey(key: string): string;
  encodeValue(value: string): string;

  decodeKey(key: string): string;
  decodeValue(value: string): string;
}

export interface HttpParamsOptions {
  fromString?: string;
  fromObject?: {
    [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
  };
  encoder?: HttpParameterCodec;
}

interface Update {
  param: string;
  value?: string | number | boolean;
  op: 'a' | 'd' | 's';
}

export interface HttpParams {
  map: Map<string, string[]> | null;
  encoder: HttpParameterCodec;
  updates: Update[] | null;
  cloneFrom: HttpParams | null;

  new (options?: HttpParamsOptions): this;
  has(param: string): boolean;
  get(param: string): string | null;
  getAll(param: string): string[] | null;
  keys(): string[];
  append(param: string, value: string | number | boolean): HttpParams;
  appendAll(params: {
    [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
  }): HttpParams;
  set(param: string, value: string | number | boolean): HttpParams;
  delete(param: string, value?: string | number | boolean): HttpParams;
  toString(): string;
  clone: HttpParams;
}

export type HttpOptionsParams =
  | HttpParams
  | {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    };
