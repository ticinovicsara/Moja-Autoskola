import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus } from '@prisma/client';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { EnrollmentHelperService } from './helpers/enrollment.helper';
import { EnrollmentRequestEntity } from './entities/enrollement-request.entity';
import { AssignInstructorDto } from './dto/assign-instructor.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    private prisma: PrismaService,
    private enrollmentHelper: EnrollmentHelperService,
  ) {}

  async getEnrollmentRequests(status?: EnrollmentStatus) {
    const statusFilter = status ? { status } : {};

    const requests = await this.prisma.enrollmentRequest.findMany({
      where: statusFilter,
      include: {
        school: true,
        candidate: true,
      },
    });

    return requests.map((request) =>
      EnrollmentRequestEntity.fromPrisma(request),
    );
  }

  async getCandidateEnrollmentRequests(candidateId: string) {
    await this.enrollmentHelper.getUserOrThrow(candidateId);

    const requests = await this.prisma.enrollmentRequest.findMany({
      where: { candidateId },
      include: {
        school: true,
        candidate: true,
      },
    });

    if (!requests.length) {
      throw new NotFoundException(
        'No enrollment requests found for this candidate.',
      );
    }

    return requests.map((request) =>
      EnrollmentRequestEntity.fromPrisma(request),
    );
  }

  async getSchoolEnrollmentRequests(schoolId: string) {
    await this.enrollmentHelper.getSchoolOrThrow(schoolId);

    const requests = await this.prisma.enrollmentRequest.findMany({
      where: { schoolId },
      include: {
        school: true,
        candidate: true,
      },
    });

    if (!requests.length) {
      throw new NotFoundException(
        'No enrollment requests found for this school.',
      );
    }

    return requests.map((request) =>
      EnrollmentRequestEntity.fromPrisma(request),
    );
  }

  async requestEnrollment(body: RequestEnrollmentDto) {
    const { candidateId, schoolId } = body;

    await this.enrollmentHelper.getUserOrThrow(candidateId);
    await this.enrollmentHelper.getSchoolOrThrow(schoolId);

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

    const enrollmentRequest = await this.prisma.enrollmentRequest.create({
      data: {
        candidateId,
        schoolId,
        status: EnrollmentStatus.Pending,
      },
    });

    return EnrollmentRequestEntity.fromPrisma(enrollmentRequest);
  }

  async approveEnrollmentRequest(id: string) {
    if (!id) {
      throw new BadRequestException('Request ID is required.');
    }

    const request = await this.enrollmentHelper.getEnrollmentRequestOrThrow(id);

    if (request.status !== EnrollmentStatus.Pending) {
      throw new BadRequestException('Enrollment is not in Pending status.');
    }

    return this.enrollmentHelper.markAsWaitingForPayment(id);
  }

  async confirmPayment(id: string) {
    return this.enrollmentHelper.finalizeEnrollment(id);
  }

  async denyEnrollmentRequest(id: string) {
    await this.enrollmentHelper.getEnrollmentRequestOrThrow(id);

    await this.prisma.enrollmentRequest.update({
      where: { id },
      data: {
        status: EnrollmentStatus.Denied,
      },
    });

    return { message: 'Enrollment request denied.' };
  }

  async deleteEnrollmentRequest(id: string) {
    await this.enrollmentHelper.getEnrollmentRequestOrThrow(id);

    await this.prisma.enrollmentRequest.delete({
      where: { id },
    });

    return { message: 'Enrollment request successfully deleted.' };
  }
}
