import { Http } from '../http';

export class ServerApiService extends Http {
  constructor(readonly url: string) {
    super();
  }

  get$<T>(endpoint: string, headers?: Record<string, string>) {
    return this.get<T>(`${this.url}/${endpoint}`, headers);
  }

  post$<T, D>(endpoint: string, body: D, headers?: Record<string, string>) {
    return this.post<T, D>(`${this.url}/${endpoint}`, body, headers);
  }
}
