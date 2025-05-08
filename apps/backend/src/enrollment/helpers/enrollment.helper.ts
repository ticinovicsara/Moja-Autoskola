import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

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
}
