import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogInDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;
}
