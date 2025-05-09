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
import { CandidateProgressDto } from './dto/candidate-progress.dto';
import { SessionFormat, UserRole } from '@prisma/client';
import { Session } from '../session/entities/session.entity';
import { TestResult } from '../test-result/entities/test-result.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userByEmail = await this.getByEmail(createUserDto.email);
    if (userByEmail) throw new ConflictException('The email already exists');

    const userByOib = await this.getByOIB(createUserDto.oib);
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
      },
    });

    return UserResponseDto.fromPrisma(newUser);
  }

  async getAll() {
    const users = await this.prisma.user.findMany();
    return users.map((u) => UserResponseDto.fromPrisma(u));
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

    return user;
  }

  async getCandidateProgress(id: string) {
    const user = await this.getById(id);

    if (user.role !== UserRole.Candidate)
      throw new ConflictException('The user is not a candidate');

    const prismaTestResults = await this.prisma.testResult.findMany({
      where: { candidateId: id, passed: true },
    });

    const prismaPassedLessons = await this.prisma.sessionCandidate.findMany({
      where: {
        candidateId: id,
        session: { format: SessionFormat.Lesson, endTime: { lt: new Date() } },
      },
      include: { session: true },
    });

    const testResults = prismaTestResults
      .map((result) => TestResult.fromPrisma(result))
      .filter((result): result is TestResult => result !== null);

    const passedLessons = prismaPassedLessons
      .map((lesson) => Session.fromPrisma(lesson.session))
      .filter((session): session is Session => session !== null);

    return new CandidateProgressDto(testResults, passedLessons);
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
