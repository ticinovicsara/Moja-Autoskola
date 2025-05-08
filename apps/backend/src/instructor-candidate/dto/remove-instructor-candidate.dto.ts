import { IsString, IsNotEmpty } from 'class-validator';

export class RemoveInstructorCandidateDto {
  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsString()
  @IsNotEmpty()
  candidateId: string;
}
