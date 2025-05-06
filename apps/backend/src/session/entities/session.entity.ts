import {
  Session as PrismaSession,
  SessionFormat,
  SessionType,
} from '@prisma/client';
import { IsDate, IsEnum, IsUUID } from 'class-validator';

export class Session {
  @IsUUID()
  id: string;

  @IsUUID()
  schoolId: string;

  @IsUUID()
  instructorId: string | null;

  @IsEnum(SessionType)
  type: SessionType;

  @IsEnum(SessionFormat)
  format: SessionFormat;

  @IsDate()
  startTime: Date;

  @IsDate()
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
