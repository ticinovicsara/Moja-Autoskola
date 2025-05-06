import { PrismaService } from '@/prisma/prisma.service';
import { User } from '@/user/entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Day, UserRole } from '@prisma/client';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';

@Injectable()
export class InstructorService {
  constructor(private readonly prisma: PrismaService) {}

  async getCandidatesForInstructor(instructorId: string) {
    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });

    if (!instructor || instructor.role !== 'Instructor') {
      throw new NotFoundException('Instructor not found.');
    }

    const pairs = await this.prisma.candidateInstructor.findMany({
      where: { instructorId },
      include: {
        candidate: true,
      },
    });

    if (!pairs.length) {
      throw new NotFoundException('No candidates assigned to this instructor.');
    }

    return pairs.map((pair) => ({
      id: pair.candidate.id,
      name: `${pair.candidate.firstName} ${pair.candidate.lastName}`,
      email: pair.candidate.email,
      role: pair.candidate.role,
    }));
  }

  async getInstructorSlots(instructorId: string) {
    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });

    if (!instructor || instructor.role !== UserRole.Instructor) {
      throw new NotFoundException('Instructor not found or invalid role.');
    }

    return this.prisma.instructorSlot.findMany({
      where: { instructorId },
    });
  }

  async addInstructorSlot(body: AddInstructorSlotDto) {
    const instructor = await this.prisma.user.findUnique({
      where: { id: body.instructorId },
    });

    if (!instructor || instructor.role !== UserRole.Instructor) {
      throw new NotFoundException('Instructor not found or invalid role.');
    }

    return this.prisma.instructorSlot.create({
      data: {
        instructorId: body.instructorId,
        day: body.day,
        startTime: body.startTime,
        endTime: body.endTime,
      },
    });
  }
}
