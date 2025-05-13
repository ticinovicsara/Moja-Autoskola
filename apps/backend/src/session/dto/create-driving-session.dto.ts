import { IsUUID } from 'class-validator';

export class CreateDrivingSessionDto {
  @IsUUID()
  instructorSlotId: string;

  @IsUUID()
  instructorId: string;

  @IsUUID()
  candidateId: string;
}
