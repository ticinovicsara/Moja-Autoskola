import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ConfirmEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  instructorId: string;
}
