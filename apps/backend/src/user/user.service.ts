import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userByEmail = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (userByEmail) throw new ConflictException('The email already exists');

    const userByOib = await this.prisma.user.findUnique({
      where: { oib: createUserDto.oib },
    });
    if (userByOib) throw new ConflictException('OIB already exists');

    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        password: await bcrypt.hash(createUserDto.password, 10),
        dateOfBirth: createUserDto.dateOfBirth,
        oib: createUserDto.oib,
        role: createUserDto.role,
        phoneNumber: createUserDto.phoneNumber,
      },
    });

    return UserResponseDto.fromPrisma(newUser);
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException("The user doesn't exist");
    return UserResponseDto.fromPrisma(user);
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new NotFoundException("The user doesn't exist");
    return UserResponseDto.fromPrisma(user);
  }

  async getByOIB(oib: string) {
    const user = await this.prisma.user.findUnique({
      where: { oib },
    });
    if (!user) throw new NotFoundException("The user doesn't exist");
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.getById(id);

    if (updateUserDto.email) {
      const email = await this.getByEmail(updateUserDto.email);
      if (email) throw new ConflictException('The email already exists');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        password: updateUserDto.password
          ? await bcrypt.hash(updateUserDto.password, 10)
          : undefined,
        role: updateUserDto.role,
      },
    });

    return UserResponseDto.fromPrisma(updatedUser);
  }

  async remove(id: string) {
    await this.getById(id);

    const deletedUser = await this.prisma.user.delete({ where: { id } });
    return UserResponseDto.fromPrisma(deletedUser);
  }
}
