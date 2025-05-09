import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';
import { UserResponseDto } from '@/user/dto/user-response.dto';
import { UserService } from '@/user/user.service';

@Injectable()
export class InstructorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
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

  async getInstructorSlots(instructorId: string) {
    await this.userService.getById(instructorId);

    return this.prisma.instructorSlot.findMany({
      where: { instructorId },
    });
  }

  async addInstructorSlot(body: AddInstructorSlotDto) {
    const { instructorId, day, startTime, endTime } = body;
    await this.userService.getById(instructorId);

    return this.prisma.instructorSlot.create({
      data: {
        instructorId: instructorId,
        day: day,
        startTime: startTime,
        endTime: endTime,
      },
    });
  }
}
