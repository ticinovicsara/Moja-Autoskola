import { User } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserResponseDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  static fromPrisma(prismaUser: User | null) {
    if (prismaUser === null) return null;

    return new UserResponseDto(
      prismaUser.firstName,
      prismaUser.lastName,
      prismaUser.email,
    );
  }
}
