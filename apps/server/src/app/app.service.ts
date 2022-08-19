import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getGithubUser(username: string) {
    const headers = { Accept: 'application/json' };
    const url = `https://api.github.com/users/${username}`;
    return this.httpService.get(url, { headers }).pipe(map(({ data }) => data));
  }
}
