import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';
import { InstructorResponseDto } from './dto/instructor-response';

@Injectable()
export class InstructorService {
  constructor(private readonly prisma: PrismaService) {}

  async getCandidatesForInstructor(instructorId: string) {
    await this.getById(instructorId);

    const pairs = await this.prisma.candidateInstructor.findMany({
      where: { instructorId },
      include: {
        candidate: true,
      },
    });

    return pairs as InstructorResponseDto;
  }

  async getInstructorSlots(instructorId: string) {
    await this.getById(instructorId);

    return this.prisma.instructorSlot.findMany({
      where: { instructorId },
    });
  }

  async addInstructorSlot(body: AddInstructorSlotDto) {
    const { instructorId, day, startTime, endTime } = body;
    await this.getById(instructorId);

    return this.prisma.instructorSlot.create({
      data: {
        instructorId: instructorId,
        day: day,
        startTime: startTime,
        endTime: endTime,
      },
    });
  }

  private async getById(instructorId: string) {
    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });

    if (!instructor) {
      throw new NotFoundException('Instructor not found.');
    }

    if (instructor.role !== UserRole.Instructor) {
      throw new BadRequestException('User does not have the instructor role.');
    }

    return instructor;
  }
}
