import { ProgressInfoDto } from '@/candidate/dto/progress-info.dto';
import { Type } from 'class-transformer';
import { ValidateNested, IsObject } from 'class-validator';

export class CandidateProgressDto {
  @IsObject()
  @ValidateNested()
  @Type(() => ProgressInfoDto)
  passedTests: ProgressInfoDto;

  @IsObject()
  @ValidateNested()
  @Type(() => ProgressInfoDto)
  passedLessons: ProgressInfoDto;

  constructor(passedTests: ProgressInfoDto, passedLessons: ProgressInfoDto) {
    this.passedTests = passedTests;
    this.passedLessons = passedLessons;
  }
}
