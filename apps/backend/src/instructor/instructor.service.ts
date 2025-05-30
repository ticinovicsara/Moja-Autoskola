import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';
import { UserResponseDto } from '@/user/dto/user-response.dto';
import { UserService } from '@/user/user.service';
import { InstructorSlot } from './entities/instructor-slot.entity';
import { SchoolService } from '@/school/school.service';
import { UserRole } from '@prisma/client';

@Injectable()
export class InstructorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly schoolService: SchoolService,
  ) {}

  async getCandidatesForInstructor(instructorId: string) {
    await this.userService.getById(instructorId);

    const pairs = await this.prisma.candidateInstructor.findMany({
      where: { instructorId },
      include: {
        candidate: true,
      },
    });

    return pairs.map((p) => UserResponseDto.fromPrisma(p.candidate));
  }

  async getInstructorsBySchool(schoolId: string) {
    await this.schoolService.getById(schoolId);

    const instructors = await this.prisma.schoolUser.findMany({
      where: {
        schoolId,
        user: {
          role: UserRole.Instructor,
        },
      },
      include: {
        user: true,
      },
    });

    return instructors.map((c) => UserResponseDto.fromPrisma(c.user));
  }

  async getInstructorSlots(instructorId: string) {
    await this.userService.getById(instructorId);
    const slots = await this.prisma.instructorSlot.findMany({
      where: { instructorId },
    });
    return slots.map((s) => InstructorSlot.fromPrisma(s));
  }

  async getInstructorSlotById(id: string) {
    const slot = await this.prisma.instructorSlot.findUnique({ where: { id } });
    if (!slot) throw new NotFoundException("The instructor slot doesn't exist");
    return InstructorSlot.fromPrisma(slot);
  }

  async addInstructorSlot(body: AddInstructorSlotDto) {
    const { instructorId, startTime, endTime } = body;
    await this.userService.getById(instructorId);

    const slot = await this.prisma.instructorSlot.create({
      data: {
        instructorId: instructorId,
        startTime: startTime,
        endTime: endTime,
      },
    });

    return InstructorSlot.fromPrisma(slot);
  }

  async deleteInstructorSlot(id: string) {
    await this.getInstructorSlotById(id);
    const slot = await this.prisma.instructorSlot.delete({
      where: { id },
    });
    return InstructorSlot.fromPrisma(slot);
  }
}
