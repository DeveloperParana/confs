import {Controller, Get, Param} from '@nestjs/common';
import {map} from 'rxjs';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('members')
  members() {
    return this.appService.getMembers().pipe(
      map(({data}) => {
        return data.map((m) => ({
          status: m.status,
          photo: m.photo,
          city: m.city,
          name: m.name,
          id: m.id,
        }));
      })
    );
  }

  @Get('users/:login')
  userFromLogin(@Param('login') login: string) {
    return this.appService.getGithubUserByLogin(login);
  }

  @Get('user/:id')
  userFromId(@Param('id') id: string) {
    return this.appService.getGithubUserById(+id);
  }
}
