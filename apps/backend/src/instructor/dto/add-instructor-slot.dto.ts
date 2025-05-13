import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AddInstructorSlotDto {
  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;
}
