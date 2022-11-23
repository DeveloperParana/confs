import { HttpClientService } from './http/client.service';

export class ServerService {
  constructor(private readonly http: HttpClientService, public url: string) {}

  get<T>(endpoint: string, headers?: Record<string, string>) {
    const url = `${this.url}/${endpoint}`;
    return this.http.get<T>(url, headers);
  }

  post<T, D>(endpoint: string, body: D, headers?: Record<string, string>) {
    return this.http.post<T>(`${this.url}/${endpoint}`, body, headers);
  }
}
