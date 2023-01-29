import { IsEmail, IsAlphanumeric } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsAlphanumeric()
  password: string;
}
