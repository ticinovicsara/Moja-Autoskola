import { InstructorSlot as PrismaInstructorSlot } from '@prisma/client';

export class InstructorSlot {
  instructorId: string;
  startTime: Date;
  endTime: Date;

  constructor(instructorId: string, startTime: Date, endTime: Date) {
    this.instructorId = instructorId;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  static fromPrisma(prismaInstructorSlot: PrismaInstructorSlot) {
    return new InstructorSlot(
      prismaInstructorSlot.instructorId,
      prismaInstructorSlot.startTime,
      prismaInstructorSlot.endTime,
    );
  }
}
