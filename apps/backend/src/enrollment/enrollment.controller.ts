import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { EnrollmentStatus } from '@prisma/client';
import { UpdateRequestDto } from './dto/update-request.dto';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  async getEnrollmentRequests(@Query('status') status?: EnrollmentStatus) {
    return this.enrollmentService.getEnrollmentRequests(status);
  }

  @Get('candidate/:id')
  async getCandidateEnrollmentRequests(@Param('id') candidateId: string) {
    return this.enrollmentService.getCandidateEnrollmentRequests(candidateId);
  }

  @Get('school/:id')
  async getSchoolEnrollmentRequests(@Param('id') schoolId: string) {
    return this.enrollmentService.getSchoolEnrollmentRequests(schoolId);
  }

  @Post()
  async requestEnrollment(@Body() body: RequestEnrollmentDto) {
    return this.enrollmentService.requestEnrollment(body);
  }

  @Patch()
  async updateEnrollmentStatus(@Body() body: UpdateRequestDto) {
    return this.enrollmentService.updateEnrollmentStatus(body);
  }

  @Delete(':id')
  async deleteEnrollmentRequest(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollmentRequest(id);
  }
}
