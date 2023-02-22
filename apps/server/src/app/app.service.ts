import {open, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join} from 'node:path';

import {BadRequestException, Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {HttpService} from '@nestjs/axios';
import {map, take} from 'rxjs';

import {dataResponse} from '@confs/shared/data-access';
import {Member} from '@confs/shared/api-interfaces';

import {ticketTemplate} from './utilities';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService // private readonly webp: WebpProvider
  ) {}

  getGithubUserByLogin(login: string) {
    const headers = this.buildHeaders();
    const url = `https://api.github.com/users/${login}`;

    this.createTicket(login);

    return this.httpService.get(url, {headers}).pipe(map(dataResponse));
  }

  getGithubUserById(id: number) {
    const headers = this.buildHeaders();
    const url = `https://api.github.com/user/${id}`;
    return this.httpService.get(url, {headers}).pipe(map(dataResponse));
  }

  getGithubUser(username: string) {
    const headers = this.buildHeaders();
    const url = `https://api.github.com/users/${username}`;
    return this.httpService.get(url, {headers}).pipe(map(dataResponse));
  }

  getMembers() {
    return this.httpService.get<Member[]>(
      'https://api.meetup.com/developerparana/members'
    );
  }

  async createTicket(username: string) {
    const ticket = this.hasTicket(username);

    if (typeof ticket === 'string') {
      const user$ = this.getGithubUser(username).pipe(take(1));

      const $user = user$.subscribe((user) => {
        open(ticket, 'w')
          .then(async (fd) => {
            const tmpl = ticketTemplate(user);

            try {
              return (
                writeFile(fd, tmpl, 'utf8')
                  // .then(() => this.webp.convert(ticket))
                  .finally(fd.close)
              );
            } catch (err) {
              throw new BadRequestException(err);
            }
          })
          .finally(() => $user.unsubscribe());
      });
    }
  }

  hasTicket(login: string) {
    const file = `assets/${login}.svg`;
    const path = join(__dirname, file);
    return existsSync(path) ? true : path;
  }

  buildHeaders() {
    const envKey = 'GITHUB_TOKEN';
    const githubToken = this.configService.get(envKey);
    return {
      Accept: 'application/json',
      Authentication: `Bearer ${githubToken}`,
    };
  }
}
