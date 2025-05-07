import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus, UserRole } from '@prisma/client';

@Injectable()
export class EnrollmentHelperService {
  constructor(private prisma: PrismaService) {}

  async getUserOrThrow(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    switch (user.role) {
      case UserRole.Candidate:
        return user;
      case UserRole.Instructor:
        return user;
      default:
        throw new NotFoundException(`${user.role} not found.`);
    }
  }

  async getSchoolOrThrow(id: string) {
    const school = await this.prisma.school.findUnique({ where: { id } });
    if (!school) throw new NotFoundException('School not found.');
    return school;
  }

  async getEnrollmentRequestOrThrow(requestId: string) {
    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    return request;
  }

  async markAsWaitingForPayment(requestId: string) {
    await this.prisma.enrollmentRequest.update({
      where: { id: requestId },
      data: { status: EnrollmentStatus.WaitingForPayment },
    });

    return { message: 'Request verified. Now waiting for payment.' };
  }

  async addCandidateToSchool(candidateId: string, schoolId: string) {
    const alreadyInSchool = await this.prisma.schoolUser.findFirst({
      where: { userId: candidateId, schoolId },
    });

    if (!alreadyInSchool) {
      await this.prisma.schoolUser.create({
        data: { userId: candidateId, schoolId },
      });
    }
  }

  async finalizeEnrollment(requestId: string) {
    const request = await this.getEnrollmentRequestOrThrow(requestId);

    await this.prisma.enrollmentRequest.update({
      where: { id: requestId },
      data: { status: EnrollmentStatus.Approved },
    });

    await this.prisma.user.update({
      where: { id: request.candidateId },
      data: { role: UserRole.Candidate },
    });

    return { message: 'Enrollment approved and processed.' };
  }
}
