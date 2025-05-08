import { User, UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

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

  @IsEnum(UserRole)
  role: UserRole;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    role: UserRole,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }

  static fromPrisma(prismaUser: User) {
    return new UserResponseDto(
      prismaUser.firstName,
      prismaUser.lastName,
      prismaUser.email,
      prismaUser.role,
    );
  }
}
