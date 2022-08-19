import { Get, Post, Body, Param, Controller } from '@nestjs/common';

import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  create(@Body() createSubscribeDto: CreateSubscribeDto) {
    return this.subscribeService.create(createSubscribeDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.subscribeService.findOne(id);
  // }

//   @Get()
//   findAll() {
//     return this.subscribeService.findAll();
//   }
}
