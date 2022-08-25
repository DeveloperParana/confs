import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('members')
  members() {
    return this.appService.getMembers().pipe(
      map(({ data }) => {
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
  // @Get()
  // @Render('index.hbs')
  // getDevParana() {
  //   return this.appService.getGithubUser('developerparana');
  // }

  // @Get(':username')
  // @Render('index.hbs')
  // getData(@Param('username') username: string) {
  //   return this.appService.getGithubUser(username);
  // }

  // @Get('ticket/:username')
  // @Render('ticket.hbs')
  // ticketUser(@Param('username') username: string) {
  //   if (!existsSync(`assets/${username}.webp`)) {
  //     const url = environment['server.api'];
  //     return { url: `${url}/${username}/ticket` };
  //   }
  //   return this.appService.getGithubUser(username);
  // }

  // @Get('webp/:username')
  // @Render('webp.hbs')
  // webpUser(@Param('username') username: string) {
  //   return { path: `assets/${username}.webp` };
  // }

  // @Get(':username/ticket')
  // userTicket(@Param('username') username: string) {
  //   if (existsSync(`assets/${username}.webp`)) {
  //     const url = environment['server.api'];
  //     return { url: `${url}/ticket/${username}` };
  //   }
  //   return this.appService.createTicket(username);
  // }

}
