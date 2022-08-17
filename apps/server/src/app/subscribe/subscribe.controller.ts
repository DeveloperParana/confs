import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto, UpdateSubscribeDto } from './dto';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  create(@Body() createSubscribeDto: CreateSubscribeDto) {
    return this.subscribeService.create(createSubscribeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.subscribeService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto
  ) {
    return this.subscribeService.update(id, updateSubscribeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscribeService.remove(id);
  }
}
