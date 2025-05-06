import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ApproveEnrollmentRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  instructorId?: string;

  @IsOptional()
  @IsBoolean()
  paymentConfirmed?: boolean;
}
