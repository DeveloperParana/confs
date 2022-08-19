import { Controller, Render, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  getDevParana() {
    return this.appService.getGithubUser('developerparana')
  }

  @Get(':username')
  @Render('index.hbs')
  getData(@Param('username') username: string) {
    return this.appService.getGithubUser(username)
  }
}
