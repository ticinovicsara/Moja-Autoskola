import { User as PrismaUser, UserRole } from '@prisma/client';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: UserRole,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  static fromPrisma(prismaUser: PrismaUser | null) {
    if (prismaUser === null) return null;

    return new User(
      prismaUser.id,
      prismaUser.firstName,
      prismaUser.lastName,
      prismaUser.email,
      prismaUser.password,
      prismaUser.role,
    );
  }
}
