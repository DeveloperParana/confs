import { open, writeFile } from 'node:fs/promises';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { join } from 'node:path';
import { map, take } from 'rxjs';

import { WebpProvider, ticketTemplate } from './utilities';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly webp: WebpProvider
  ) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  getGithubUser(username: string) {
    const headers = { Accept: 'application/json' };
    const url = `https://api.github.com/users/${username}`;
    return this.httpService.get(url, { headers }).pipe(map(({ data }) => data));
  }

  async createTicket(username: string) {
    const user$ = this.getGithubUser(username).pipe(take(1));

    const $user = user$.subscribe((user) => {
      const file = `assets/${user.login}.svg`;
      const path = join(__dirname, file);

      open(path, 'w')
        .then(async (fd) => {
          const tmpl = ticketTemplate(user);
          return writeFile(fd, tmpl, 'utf8')
            .then(() => this.convertToWebP(path))
            .catch(console.error)
            .finally(fd.close);
        })
        .finally(() => $user.unsubscribe());
    });
  }

  convertToWebP(path: string) {
    return this.webp.convert(path);
  }
}
