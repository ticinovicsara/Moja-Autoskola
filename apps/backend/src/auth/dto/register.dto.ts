import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @MinLength(2)
  @IsString()
  firstName: string;

  @MinLength(2)
  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @MinLength(5)
  @IsString()
  password: string;

  //   @IsString()
  //   @MinLength(11)
  //   oib: string;

  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}
