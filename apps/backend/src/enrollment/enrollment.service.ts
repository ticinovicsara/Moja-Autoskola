import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus, UserRole } from '@prisma/client';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async requestEnrollment(body: RequestEnrollmentDto) {
    const { candidateId, schoolId } = body;

    const existing = await this.prisma.enrollmentRequest.findUnique({
      where: {
        candidateId_schoolId: {
          candidateId,
          schoolId,
        },
      },
    });

    if (existing) {
      throw new ConflictException('Enrollment request already exists.');
    }

    const school = await this.prisma.school.findUnique({
      where: { id: schoolId },
    });

    if (!school) {
      throw new NotFoundException('School not found.');
    }

    return this.prisma.enrollmentRequest.create({
      data: {
        candidateId,
        schoolId,
        status: EnrollmentStatus.Pending,
      },
    });
  }

  async approveEnrollmentRequest(id: string) {
    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    await this.prisma.enrollmentRequest.update({
      where: { id },
      data: {
        status: EnrollmentStatus.Approved,
      },
    });

    await this.prisma.user.update({
      where: { id: request.candidateId },
      data: {
        role: UserRole.Candidate,
      },
    });

    return { message: 'Enrollment approved and user role updated.' };
  }

  async denyEnrollmentRequest(id: string) {
    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    await this.prisma.enrollmentRequest.update({
      where: { id },
      data: {
        status: EnrollmentStatus.Denied,
      },
    });

    return { message: 'Enrollment request denied.' };
  }
}
