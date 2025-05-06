import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus, UserRole } from '@prisma/client';
import { ApproveEnrollmentRequestDto } from '../dto/approve-enrollment.dto';

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

  async assignCandidateToInstructor(
    candidateId: string,
    instructorId?: string,
  ) {
    if (!instructorId) return;

    await this.prisma.candidateInstructor.create({
      data: { candidateId, instructorId },
    });
  }

  async finalizeEnrollment(body: ApproveEnrollmentRequestDto) {
    const { id: requestId, instructorId } = body;

    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id: requestId },
      include: {
        candidate: true,
        school: true,
      },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    const { candidate, school } = request;

    await this.addCandidateToSchool(candidate.id, school.id);

    if (instructorId) {
      await this.assignCandidateToInstructor(candidate.id, instructorId);
    }

    await this.prisma.enrollmentRequest.update({
      where: { id: request.id },
      data: { status: EnrollmentStatus.Approved },
    });

    await this.prisma.enrollmentRequest.update({
      where: { id: request.id },
      data: { status: EnrollmentStatus.Approved },
    });

    await this.prisma.user.update({
      where: { id: request.candidateId },
      data: { role: UserRole.Candidate },
    });

    return { message: 'Enrollment approved and processed.' };
  }
}
