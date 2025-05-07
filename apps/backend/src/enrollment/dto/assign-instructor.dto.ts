import { IsNotEmpty, IsString } from 'class-validator';

export class AssignInstructorDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsString()
  @IsNotEmpty()
  candidateId: string;
}
