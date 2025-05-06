import { IsNotEmpty, IsString } from 'class-validator';

export class AssignInstructorDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsString()
  instructorId: string;

  @IsString()
  @IsString()
  candidateId: string;
}
