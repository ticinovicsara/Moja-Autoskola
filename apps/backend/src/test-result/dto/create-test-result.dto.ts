import { SessionType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateTestResultDto {
  @IsUUID()
  candidateId: string;

  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsEnum(SessionType)
  type: SessionType;

  @IsOptional()
  @IsNumber()
  points: number | null;

  @IsBoolean()
  passed: boolean;
}
