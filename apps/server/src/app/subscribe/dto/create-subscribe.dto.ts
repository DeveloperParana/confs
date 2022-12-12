import { IsEmail, IsEmpty, IsString } from 'class-validator';

export class CreateSubscribeDto {
  @IsEmail({}, { always: true })
  @IsString({ always: true })
  email: string;

  @IsEmpty()
  @IsString({})
  username = '';

  @IsEmpty()
  @IsString({})
  name = '';

  id?: number;
}
