import { SessionFormat, SessionType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsUUID } from 'class-validator';

export class CreateSessionDto {
  @IsUUID()
  schoolId: string;

  @IsUUID()
  instructorId: string | null;

  @IsEnum(SessionType)
  type: SessionType;

  @IsEnum(SessionFormat)
  format: SessionFormat;

  @Type(() => Date)
  @IsDate()
  startTime: Date;

  @Type(() => Date)
  @IsDate()
  endTime: Date;
}
