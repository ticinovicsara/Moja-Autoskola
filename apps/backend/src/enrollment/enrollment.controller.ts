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
import { AssignInstructorDto } from './dto/assign-instructor.dto';
import { EnrollmentStatus } from '@prisma/client';

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

  @Patch('approve')
  approveRequest(@Body() body: { id: string }) {
    return this.enrollmentService.approveEnrollmentRequest(body.id);
  }

  @Patch('confirm-payment')
  async confirmPayment(@Body() body: { id: string }) {
    return this.enrollmentService.confirmPayment(body.id);
  }

  // @Patch('assign-instructor')
  // async assignInstructor(@Body() body: AssignInstructorDto) {
  //   return this.enrollmentService.assignInstructor(body);
  // }

  @Patch('deny/:id')
  async denyEnrollment(@Param('id') id: string) {
    return this.enrollmentService.denyEnrollmentRequest(id);
  }

  @Delete(':id')
  async deleteEnrollmentRequest(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollmentRequest(id);
  }
}
