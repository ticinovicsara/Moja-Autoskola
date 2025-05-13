import { Type } from 'class-transformer';
import { ValidateNested, IsObject } from 'class-validator';
import { PassedLessonsDto } from './ProgressHours/PassedLessionsDto';
import { PassedTestsDto } from './ProgressHours/PassedTestsDto';

export class CandidateProgressDto {
  @IsObject()
  @ValidateNested()
  @Type(() => PassedTestsDto)
  passedTests: PassedTestsDto;

  @IsObject()
  @ValidateNested()
  @Type(() => PassedLessonsDto)
  passedLessons: PassedLessonsDto;

  constructor(passedTests: PassedTestsDto, passedLessons: PassedLessonsDto) {
    this.passedTests = passedTests;
    this.passedLessons = passedLessons;
  }
}
