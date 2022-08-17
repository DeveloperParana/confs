import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscribeDto } from './create-subscribe.dto';

export class UpdateSubscribeDto extends PartialType(CreateSubscribeDto) {}
