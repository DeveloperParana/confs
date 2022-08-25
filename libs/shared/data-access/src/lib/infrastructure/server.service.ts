import { Http } from '../http';

export class ServerService {
  constructor(private readonly http: Http, public url: string) {}

  get<T>(endpoint: string, headers?: Record<string, string>) {
    const url = `${this.url}/${endpoint}`;
    return this.http.get<T>(url, headers);
  }

  post<T, D>(endpoint: string, body: D, headers?: Record<string, string>) {
    return this.http.post<T, D>(`${this.url}/${endpoint}`, body, headers);
  }
}
