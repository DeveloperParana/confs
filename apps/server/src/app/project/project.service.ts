import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

import { dataResponse } from '@confs/shared/data-access';

@Injectable()
export class ProjectService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  getProject(projectId: number) {
    return this.request(`https://api.github.com/projects/${projectId}`);
  }

  getProjectColumns(projectId: number) {
    return this.request(`https://api.github.com/projects/${projectId}/columns`);
  }

  getProjectColumn(columnId: number) {
    return this.request(`https://api.github.com/projects/columns/${columnId}`);
  }

  getProjectColumnCards(columnId: number) {
    return this.request(
      `https://api.github.com/projects/columns/${columnId}/cards`
    );
  }

  private request(url: string) {
    const headers = this.getHeaders();
    return this.httpService.get(url, { headers }).pipe(map(dataResponse));
  }

  private getHeaders() {
    const Accept = `application/vnd.github+json`;

    const token = this.configService.get('GHTK_PROJECT');
    const Authorization = `Bearer ${token}`;

    return { Accept, Authorization };
  }
}
