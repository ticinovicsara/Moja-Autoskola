import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get('pending')
  async getPendingRequests() {
    return this.enrollmentService.getPendingEnrollmentRequests();
  }

  @Get('candidate/:candidateId')
  async getCandidateEnrollmentRequests(
    @Param('candidateId') candidateId: string,
  ) {
    return this.enrollmentService.getCandidateEnrollmentRequests(candidateId);
  }

  @Get('school/:schoolId')
  async getSchoolEnrollmentRequests(@Param('schoolId') schoolId: string) {
    return this.enrollmentService.getSchoolEnrollmentRequests(schoolId);
  }

  @Post()
  async requestEnrollment(@Body() body: RequestEnrollmentDto) {
    return this.enrollmentService.requestEnrollment(body);
  }

  @Patch('approve/:id')
  async approveEnrollment(@Param('id') id: string) {
    return this.enrollmentService.approveEnrollmentRequest(id);
  }

  @Patch('deny/:id')
  async denyEnrollment(@Param('id') id: string) {
    return this.enrollmentService.denyEnrollmentRequest(id);
  }
}
