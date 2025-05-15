import { PrismaService } from '@/prisma/prisma.service';
import { SchoolService } from '@/school/school.service';
import { UserResponseDto } from '@/user/dto/user-response.dto';
import { UserService } from '@/user/user.service';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EnrollmentStatus, SessionFormat, UserRole } from '@prisma/client';
import { CandidateProgressDto } from './dto/candidate-progress.dto';
import { TestResult } from '@/test-result/entities/test-result.entity';
import { Session } from '@/session/entities/session.entity';

@Injectable()
export class CandidateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
  ) {}

  async getCandidateProgress(id: string) {
    const user = await this.userService.getById(id);

    if (user.role !== UserRole.Candidate)
      throw new BadRequestException('The user is not a candidate');

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

    const passedTestsDto = {
      theory: 0,
      driving: 0,
      firstAid: 0,
    };

    for (const test of testResults) {
      switch (test.type) {
        case 'Theory':
          passedTestsDto.theory++;
          break;
        case 'Driving':
          passedTestsDto.driving++;
          break;
        case 'FirstAid':
          passedTestsDto.firstAid++;
          break;
      }
    }

    const passedLessionsDto = {
      theory: 0,
      driving: 0,
      firstAid: 0,
    };

    for (const lesson of passedLessons) {
      switch (lesson.type) {
        case 'Theory':
          passedLessionsDto.theory++;
          break;
        case 'Driving':
          passedLessionsDto.driving++;
          break;
        case 'FirstAid':
          passedLessionsDto.firstAid++;
          break;
      }
    }

    return new CandidateProgressDto(passedTestsDto, passedLessionsDto);
  }

  async getCandidatesInstructor(candidateId: string) {
    await this.userService.getById(candidateId);
    const candidateInstructor = await this.prisma.candidateInstructor.findFirst(
      {
        where: { candidateId },
        include: {
          instructor: true,
        },
      },
    );

    if (!candidateInstructor) {
      throw new NotFoundException("The candidate doesn't have an instructor");
    }

    return UserResponseDto.fromPrisma(candidateInstructor.instructor);
  }

  async getCandidatesWithoutInstructor(schoolId: string) {
    await this.schoolService.getById(schoolId);

    const candidates = await this.prisma.user.findMany({
      where: {
        role: UserRole.Candidate,
        instructorCandidate: {
          none: {},
        },
        enrollmentRequests: {
          some: {
            schoolId,
            status: EnrollmentStatus.Approved,
          },
        },
      },
    });

    return candidates.map((c) => UserResponseDto.fromPrisma(c));
  }

  async getCandidatesBySchool(schoolId: string) {
    await this.schoolService.getById(schoolId);

    const candidates = await this.prisma.user.findMany({
      where: {
        role: UserRole.Candidate,
        enrollmentRequests: {
          some: {
            schoolId: schoolId,
            status: EnrollmentStatus.Approved,
          },
        },
      },
    });

    return candidates.map((c) => UserResponseDto.fromPrisma(c));
  }
}
