import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { TestResult } from './entities/test-result.entity';

@Injectable()
export class TestResultService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(createTestResultDto: CreateTestResultDto) {
    await this.userService.getById(createTestResultDto.candidateId);

    const newTestResult = await this.prisma.testResult.create({
      data: {
        candidateId: createTestResultDto.candidateId,
        date: createTestResultDto.date,
        type: createTestResultDto.type,
        points: createTestResultDto.points,
        passed: createTestResultDto.passed,
      },
    });

    return TestResult.fromPrisma(newTestResult);
  }

  async getById(id: string) {
    const testResult = await this.prisma.testResult.findUnique({
      where: { id },
    });
    if (!testResult)
      throw new NotFoundException("The test result doesn't exist");
    return TestResult.fromPrisma(testResult);
  }

  async getAllByCandidateId(id: string) {
    const testResults = await this.prisma.testResult.findMany({
      where: { candidateId: id },
    });
    return testResults.map((u) => TestResult.fromPrisma(u));
  }

  async update(id: string, updateTestResultDto: UpdateTestResultDto) {
    await this.getById(id);

    if (updateTestResultDto.candidateId) {
      await this.userService.getById(updateTestResultDto.candidateId);
    }

    const updatedTestResult = await this.prisma.testResult.update({
      where: { id },
      data: {
        candidateId: updateTestResultDto.candidateId,
        date: updateTestResultDto.date,
        type: updateTestResultDto.type,
        points: updateTestResultDto.points,
        passed: updateTestResultDto.passed,
      },
    });

    return TestResult.fromPrisma(updatedTestResult);
  }

  async remove(id: string) {
    await this.getById(id);

    const deletedTestResult = await this.prisma.testResult.delete({
      where: { id },
    });
    return TestResult.fromPrisma(deletedTestResult);
  }
}
