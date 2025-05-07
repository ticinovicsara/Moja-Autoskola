import { User, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class UserResponseDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;

  @IsString()
  @Length(11, 11)
  oib: string;

  @IsEnum(UserRole)
  role: UserRole;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dateOfBirth: Date,
    oib: string,
    role: UserRole,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    (this.dateOfBirth = dateOfBirth), (this.oib = oib);
    this.role = role;
  }

  static fromPrisma(prismaUser: User | null) {
    if (prismaUser === null) return null;

    return new UserResponseDto(
      prismaUser.id,
      prismaUser.firstName,
      prismaUser.lastName,
      prismaUser.email,
      prismaUser.password,
      prismaUser.dateOfBirth,
      prismaUser.oib,
      prismaUser.role,
    );
  }
}
