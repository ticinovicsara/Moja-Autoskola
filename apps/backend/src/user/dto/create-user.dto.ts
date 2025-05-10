import { UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  })
  password: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;

  @Length(11, 11)
  @IsString()
  oib: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
