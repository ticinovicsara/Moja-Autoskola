import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TestResultService } from './test-result.service';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { AdminGuard } from '@/auth/guards/admin.guard';
import { CandidateGuard } from '@/auth/guards/candidate.guard';
import { InstructorGuard } from '@/auth/guards/instructor.guard';
import { SchoolAdminGuard } from '@/auth/guards/schoolAdmin.guard';

@Controller('test-result')
export class TestResultController {
  constructor(private readonly testResultService: TestResultService) {}

  @Post()
  @UseGuards(InstructorGuard)
  create(@Body() createTestResultDto: CreateTestResultDto) {
    return this.testResultService.create(createTestResultDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.testResultService.getAll();
  }

  @Get('candidate/:id')
  @UseGuards(CandidateGuard)
  findOne(@Param('id') id: string) {
    return this.testResultService.getAllByCandidateId(id);
  }

  @Patch(':id')
  @UseGuards(SchoolAdminGuard)
  update(
    @Param('id') id: string,
    @Body() updateTestResultDto: UpdateTestResultDto,
  ) {
    return this.testResultService.update(id, updateTestResultDto);
  }

  @Delete(':id')
  @UseGuards(SchoolAdminGuard)
  remove(@Param('id') id: string) {
    return this.testResultService.remove(id);
  }
}
