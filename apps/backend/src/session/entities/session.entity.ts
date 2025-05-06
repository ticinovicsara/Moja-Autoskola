import {
  Session as PrismaSession,
  SessionFormat,
  SessionType,
} from '@prisma/client';

export class Session {
  id: string;
  schoolId: string;
  instructorId: string | null;
  type: SessionType;
  format: SessionFormat;
  startTime: Date;
  endTime: Date;

  constructor(
    id: string,
    schoolId: string,
    instructorId: string | null,
    type: SessionType,
    format: SessionFormat,
    startTime: Date,
    endTime: Date,
  ) {
    this.id = id;
    this.schoolId = schoolId;
    this.instructorId = instructorId;
    this.type = type;
    this.format = format;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  static fromPrisma(prismaSession: PrismaSession | null) {
    if (prismaSession === null) return null;

    return new Session(
      prismaSession.id,
      prismaSession.schoolId,
      prismaSession.instructorId,
      prismaSession.type,
      prismaSession.format,
      prismaSession.startTime,
      prismaSession.endTime,
    );
  }
}
