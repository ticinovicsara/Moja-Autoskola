import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
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

  @IsString()
  @Length(11, 11, {
    message: 'OIB mora imati točno 11 znamenaka.',
  })
  oib: string;

  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}
