import { IsNotEmpty, IsString } from 'class-validator';

export class ApproveEnrollmentRequest {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  instructorId: string;
}
