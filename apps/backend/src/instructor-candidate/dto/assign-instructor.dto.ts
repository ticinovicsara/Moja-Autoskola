import { IsNotEmpty, IsUUID } from 'class-validator';

export class AssignInstructorDto {
  @IsUUID()
  @IsNotEmpty()
  candidateId: string;

  @IsUUID()
  @IsNotEmpty()
  instructorId: string;
}
