import { IsEmail, IsAlphanumeric, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsAlphanumeric()
  @IsOptional()
  password: string;
}
