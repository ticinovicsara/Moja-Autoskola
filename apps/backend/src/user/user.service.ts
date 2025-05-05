import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (
      !createUserDto.email ||
      !createUserDto.firstName ||
      !createUserDto.lastName ||
      !createUserDto.password ||
      !createUserDto.role
    )
      throw new BadRequestException('The user object is invalid');

    const user = await this.getByEmail(createUserDto.email);
    if (user) throw new BadRequestException('The email already exists');

    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        password: await bcrypt.hash(createUserDto.password, 10),
        role: createUserDto.role,
      },
    });

    return newUser;
  }

  async getAll() {
    const users = await this.prisma.user.findMany();
    return users.map((u) => User.fromPrisma(u));
  }

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new NotFoundException("The user doesn't exist");
    return User.fromPrisma(user);
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return User.fromPrisma(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.getById(id);
    if (!user) throw new NotFoundException("The user doesn't exist");

    if (updateUserDto.email) {
      const email = await this.getByEmail(updateUserDto.email);
      if (email) throw new BadRequestException('The email already exists');
    }

    return this.prisma.user.update({
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
  }

  async remove(id: string) {
    const user = await this.getById(id);
    if (!user) throw new NotFoundException("The user doesn't exist");
    return this.prisma.user.delete({ where: { id } });
  }
}
