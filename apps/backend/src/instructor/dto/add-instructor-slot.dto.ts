import { Day } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AddInstructorSlotDto {
  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsEnum(Day)
  @IsNotEmpty()
  day: Day;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;
}
