import { IsNotEmpty, IsString } from 'class-validator';

export class RequestEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  candidateId: string;

  @IsString()
  @IsNotEmpty()
  schoolId: string;
}
