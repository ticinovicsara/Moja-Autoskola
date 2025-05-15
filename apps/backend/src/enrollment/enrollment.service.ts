import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus, UserRole } from '@prisma/client';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { EnrollmentRequestEntity } from './entities/enrollement-request.entity';
import { UserService } from '@/user/user.service';
import { SchoolService } from '@/school/school.service';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    private prisma: PrismaService,
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
    await this.userService.getById(candidateId);

    const request = await this.prisma.enrollmentRequest.findFirst({
      where: { candidateId },
      include: {
        school: true,
        candidate: true,
      },
    });

    return request ? EnrollmentRequestEntity.fromPrisma(request) : null;
  }

  async getSchoolEnrollmentRequestsByStatus(
    schoolId: string,
    status?: EnrollmentStatus,
  ) {
    await this.schoolService.getById(schoolId);

    const requests = await this.prisma.enrollmentRequest.findMany({
      where: {
        schoolId,
        ...(status && { status }),
      },
      include: {
        school: true,
        candidate: true,
      },
    });

    return requests.map((request) =>
      EnrollmentRequestEntity.fromPrisma(request),
    );
  }
  async requestEnrollment(body: RequestEnrollmentDto) {
    const { candidateId, schoolId } = body;

    await this.userService.getById(candidateId);
    await this.schoolService.getById(schoolId);

    const userEnrollment = await this.prisma.enrollmentRequest.findFirst({
      where: {
        candidateId: candidateId,
      },
    });

    if (userEnrollment) {
      throw new ConflictException('User already has enrollment request.');
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

    const enrollmentRequest = await this.prisma.enrollmentRequest.create({
      data: {
        candidateId,
        schoolId,
        status: EnrollmentStatus.Pending,
      },
      include: {
        candidate: true,
        school: true,
      },
    });

    return EnrollmentRequestEntity.fromPrisma(enrollmentRequest);
  }

  async updateEnrollmentStatus(body: UpdateRequestDto) {
    const { id, status: newStatus } = body;
    const request = await this.getEnrollmentRequestOrThrow(id);

    if (newStatus === EnrollmentStatus.Approved) {
      await this.schoolService.addCandidateToSchool(
        request.candidateId,
        request.schoolId,
      );
      await this.userService.update(request.candidateId, {
        role: UserRole.Candidate,
      });
    }

    await this.prisma.enrollmentRequest.update({
      where: { id },
      data: { status: newStatus },
    });
  }

  async deleteEnrollmentRequest(id: string) {
    await this.getEnrollmentRequestOrThrow(id);

    await this.prisma.enrollmentRequest.delete({
      where: { id },
    });

    return { message: 'Enrollment request successfully deleted.' };
  }

  private async getEnrollmentRequestOrThrow(requestId: string) {
    const request = await this.prisma.enrollmentRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new NotFoundException('Enrollment request not found.');
    }

    return request;
  }
}
