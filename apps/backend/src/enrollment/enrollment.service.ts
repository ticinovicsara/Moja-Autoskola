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
import { UserService } from '@/user/user.service';
import { SchoolService } from '@/school/school.service';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    private prisma: PrismaService,
    private enrollmentHelper: EnrollmentHelperService,
    private userService: UserService,
    private schoolService: SchoolService,
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
    await this.userService.getUserOrThrow(candidateId);

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
    await this.schoolService.getSchoolOrThrow(schoolId);

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

    await this.userService.getUserOrThrow(candidateId);
    await this.schoolService.getSchoolOrThrow(schoolId);

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

  async updateEnrollmentStatus(body: UpdateRequestDto) {
    const { id, status: newStatus } = body;

    switch (newStatus) {
      case EnrollmentStatus.Approved:
        return this.enrollmentHelper.finalizeEnrollment(id);

      case EnrollmentStatus.Denied:
      case EnrollmentStatus.WaitingForPayment:
        return this.enrollmentHelper.updateStatusIfNeeded(id, newStatus);

      default:
        throw new BadRequestException('Invalid status');
    }
  }

  async deleteEnrollmentRequest(id: string) {
    await this.enrollmentHelper.getEnrollmentRequestOrThrow(id);

    await this.prisma.enrollmentRequest.delete({
      where: { id },
    });

    return { message: 'Enrollment request successfully deleted.' };
  }
}
