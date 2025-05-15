import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestResultService } from './test-result.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { Auth } from '@/auth/guards/auth-roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('test-result')
export class TestResultController {
  constructor(private readonly testResultService: TestResultService) {}

  @Auth(UserRole.Instructor, UserRole.SchoolAdmin)
  @Post()
  create(@Body() createTestResultDto: CreateTestResultDto) {
    return this.testResultService.create(createTestResultDto);
  }

  @Auth(UserRole.Candidate)
  @Get('candidate/:id')
  findOne(@Param('id') id: string) {
    return this.testResultService.getAllByCandidateId(id);
  }

  @Auth(UserRole.SchoolAdmin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestResultDto: UpdateTestResultDto,
  ) {
    return this.testResultService.update(id, updateTestResultDto);
  }

  @Auth(UserRole.SchoolAdmin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testResultService.remove(id);
  }
}
