import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus, UserRole } from '@prisma/client';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { ApproveEnrollmentRequestDto } from './dto/approve-enrollment.dto';
import { EnrollmentHelperService } from './helpers/enrollment.helper';
import { EnrollmentRequestEntity } from './entities/enrollement-request.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    private prisma: PrismaService,
    private enrollmentHelper: EnrollmentHelperService,
  ) {}

  async getPendingEnrollmentRequests() {
    const pendingRequests = await this.prisma.enrollmentRequest.findMany({
      where: { status: EnrollmentStatus.Pending },
      include: {
        school: true,
        candidate: true,
      },
    });

    return pendingRequests.map((request) =>
      EnrollmentRequestEntity.fromPrisma(request),
    );
  }

  async getCandidateEnrollmentRequests(candidateId: string) {
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

    const candidate = await this.prisma.user.findUnique({
      where: { id: candidateId },
    });

    if (!candidate) {
      throw new NotFoundException('User is not found.');
    }

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

    const enrollmentRequest = await this.prisma.enrollmentRequest.create({
      data: {
        candidateId,
        schoolId,
        status: EnrollmentStatus.Pending,
      },
    });

    return EnrollmentRequestEntity.fromPrisma(enrollmentRequest);
  }

  private async processEnrollmentRequest(body: ApproveEnrollmentRequestDto) {
    const { id: requestId, instructorId, paymentConfirmed } = body;

    const request =
      await this.enrollmentHelper.getEnrollmentRequestOrThrow(requestId);

    if (request.status === EnrollmentStatus.Pending) {
      return this.enrollmentHelper.markAsWaitingForPayment(requestId);
    }

    if (request.status === EnrollmentStatus.WaitingForPayment) {
      if (!paymentConfirmed) {
        return { message: 'Waiting for payment confirmation.' };
      }

      return this.enrollmentHelper.finalizeEnrollment(body);
    }

    return { message: 'No action taken. Invalid status transition.' };
  }

  async approveEnrollmentRequest(body: ApproveEnrollmentRequestDto) {
    return this.processEnrollmentRequest(body);
  }

  async confirmPayment(id: ApproveEnrollmentRequestDto) {
    return this.processEnrollmentRequest(id);
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
