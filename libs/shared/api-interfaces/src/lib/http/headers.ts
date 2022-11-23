export interface HttpHeaders {
  headers: Record<string, string>;
  normalizedNames: Record<string, string>;

  new (
    headers?:
      | string
      | {
          [name: string]: string | string[];
        }
  ): this;

  has(name: string): boolean;
  get(name: string): string | null;
  keys(): string[];
  getAll(name: string): string[] | null;
  append(name: string, value: string | string[]): HttpHeaders;
  set(name: string, value: string | string[]): HttpHeaders;
  delete(name: string, value?: string | string[]): HttpHeaders;
  clone: HttpHeaders;
}

export type HttpOptionsHeaders =
  | HttpHeaders
  | {
      [header: string]: string | string[];
    };
