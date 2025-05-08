import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { EnrollmentStatus } from '@prisma/client';

export class UpdateRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEnum(EnrollmentStatus)
  status: EnrollmentStatus;
}
