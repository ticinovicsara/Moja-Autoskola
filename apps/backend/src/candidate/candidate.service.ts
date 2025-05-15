import { PrismaService } from '@/prisma/prisma.service';
import { SchoolService } from '@/school/school.service';
import { UserResponseDto } from '@/user/dto/user-response.dto';
import { UserService } from '@/user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EnrollmentStatus, UserRole } from '@prisma/client';

@Injectable()
export class CandidateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
  ) {}

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

    return candidateInstructor
      ? UserResponseDto.fromPrisma(candidateInstructor.instructor)
      : null;
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
