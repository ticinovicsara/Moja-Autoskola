import { IsNotEmpty, IsUUID } from 'class-validator';

export class AssignInstructorCandidateDto {
  @IsUUID()
  @IsNotEmpty()
  candidateId: string;

  @IsUUID()
  @IsNotEmpty()
  instructorId: string;
}
