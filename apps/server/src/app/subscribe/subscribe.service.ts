import { Injectable } from '@nestjs/common';
import { CreateSubscribeDto, UpdateSubscribeDto } from './dto';

@Injectable()
export class SubscribeService {
  create(createSubscribeDto: CreateSubscribeDto) {
    return 'This action adds a new subscribe';
  }

  findAll() {
    return `This action returns all subscribe`;
  }

  findOne(id: string) {
    return `This action returns a #${id} subscribe`;
  }

  update(id: string, updateSubscribeDto: UpdateSubscribeDto) {
    return `This action updates a #${id} subscribe`;
  }

  remove(id: string) {
    return `This action removes a #${id} subscribe`;
  }
}
