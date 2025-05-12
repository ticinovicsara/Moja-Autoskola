import { InstructorSlot as PrismaInstructorSlot } from '@prisma/client';

export class InstructorSlot {
  id: string;
  instructorId: string;
  startTime: Date;
  endTime: Date;

  constructor(
    id: string,
    instructorId: string,
    startTime: Date,
    endTime: Date,
  ) {
    this.id = id;
    this.instructorId = instructorId;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  static fromPrisma(prismaInstructorSlot: PrismaInstructorSlot) {
    return new InstructorSlot(
      prismaInstructorSlot.id,
      prismaInstructorSlot.instructorId,
      prismaInstructorSlot.startTime,
      prismaInstructorSlot.endTime,
    );
  }
}
