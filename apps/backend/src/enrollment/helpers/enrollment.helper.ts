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

  async getEnrollmentRequestOrThrow(requestId: string) {
    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    return request;
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

    if (request.status === EnrollmentStatus.Approved) {
      throw new ConflictException(
        'Enrollment request is already approved and processed.',
      );
    }

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

  async updateStatusIfNeeded(
    id: string,
    newStatus: EnrollmentStatus,
  ): Promise<{ message: string }> {
    const enrollment = await this.getEnrollmentRequestOrThrow(id);

    if (enrollment.status === newStatus) {
      return { message: `Enrollment already has status '${newStatus}'.` };
    }

    await this.prisma.enrollmentRequest.update({
      where: { id },
      data: { status: newStatus },
    });

    return { message: `Enrollment status updated to '${newStatus}'.` };
  }
}
