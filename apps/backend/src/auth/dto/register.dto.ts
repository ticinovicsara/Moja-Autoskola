import { UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
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

  @IsPhoneNumber(undefined, { message: 'Neispravan broj telefona' })
  phoneNumber: string;

  @IsString()
  @MinLength(5)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  })
  password: string;

  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;

  @IsString()
  @Length(11, 11, {
    message: 'OIB mora imati točno 11 znamenaka.',
  })
  oib: string;

  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}
