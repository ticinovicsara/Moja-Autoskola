import { IsNotEmpty, IsUUID } from 'class-validator';

export class AssignInstructorDto {
  @IsUUID()
  @IsNotEmpty()
  requestId: string;

  @IsUUID()
  @IsNotEmpty()
  candidateId: string;

  @IsUUID()
  @IsNotEmpty()
  instructorId: string;
}
