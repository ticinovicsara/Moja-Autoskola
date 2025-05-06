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

  async getPendingEnrollmentRequests() {
    const pendingRequests = await this.prisma.enrollmentRequest.findMany({
      where: { status: EnrollmentStatus.Pending },
      include: {
        school: true,
        candidate: true,
      },
    });

    return pendingRequests.map((request) => ({
      requestId: request.id,
      candidateName: `${request.candidate.firstName} ${request.candidate.lastName}`,
      schoolName: request.school.name,
      status: request.status,
    }));
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

    return requests.map((request) => ({
      candidateName: `${request.candidate.firstName} ${request.candidate.lastName}`,
      role: request.candidate.role,
      schoolName: request.school.name,
      status: request.status,
    }));
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

    return requests.map((request) => ({
      schoolName: request.school.name,
      candidateName: `${request.candidate.firstName} ${request.candidate.lastName}`,
      role: request.candidate.role,
      status: request.status,
    }));
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
