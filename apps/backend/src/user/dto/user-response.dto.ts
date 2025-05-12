import { User, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class UserResponseDto {
  @IsUUID()
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

  @IsPhoneNumber()
  phoneNumber: string;

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
    phoneNumber: string,
    dateOfBirth: Date,
    oib: string,
    role: UserRole,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.oib = oib;
    this.role = role;
  }

  static fromPrisma(prismaUser: User) {
    return new UserResponseDto(
      prismaUser.id,
      prismaUser.firstName,
      prismaUser.lastName,
      prismaUser.email,
      prismaUser.phoneNumber,
      prismaUser.dateOfBirth,
      prismaUser.oib,
      prismaUser.role,
    );
  }
}
