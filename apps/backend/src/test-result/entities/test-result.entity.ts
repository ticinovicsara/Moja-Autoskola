import { TestResult as PrismaTestResult, SessionType } from '@prisma/client';

export class TestResult {
  id: string;
  candidateId: string;
  date: Date;
  type: SessionType;
  points: number | null;
  passed: boolean;

  constructor(
    id: string,
    candidateId: string,
    date: Date,
    type: SessionType,
    points: number | null,
    passed: boolean,
  ) {
    this.id = id;
    this.candidateId = candidateId;
    this.date = date;
    this.type = type;
    this.points = points;
    this.passed = passed;
  }

  static fromPrisma(prismaTestResult: PrismaTestResult) {
    return new TestResult(
      prismaTestResult.id,
      prismaTestResult.candidateId,
      prismaTestResult.date,
      prismaTestResult.type,
      Number(prismaTestResult.points),
      prismaTestResult.passed,
    );
  }
}
