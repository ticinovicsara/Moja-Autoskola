import { IsString, IsNotEmpty } from 'class-validator';

export class RemoveInstructorDto {
  @IsString()
  @IsNotEmpty()
  instructorId: string;

  @IsString()
  @IsNotEmpty()
  candidateId: string;
}
