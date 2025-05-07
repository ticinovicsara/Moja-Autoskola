import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Session } from '../../session/entities/session.entity';
import { TestResult } from '../../test-result/entities/test-result.entity';

export class CandidateProgressDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestResult)
  passedTests: TestResult[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Session)
  passedLessons: Session[];

  constructor(passedTests: TestResult[], passedLessons: Session[]) {
    this.passedTests = passedTests;
    this.passedLessons = passedLessons;
  }
}
