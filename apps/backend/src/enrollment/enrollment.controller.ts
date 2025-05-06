import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { ConfirmEnrollmentDto } from './dto/confirm-enrollment';

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

  @Patch('approve')
  approveRequest(@Param('id') id: string) {
    return this.enrollmentService.approveEnrollmentRequest(id);
  }

  @Patch('confirm-payment')
  async confirmPayment(@Param('id') id: string) {
    return this.enrollmentService.confirmPayment(id);
  }

  @Patch('assign-instructor')
  async assignInstructor(@Body() body: ConfirmEnrollmentDto) {
    return this.enrollmentService.assignInstructor(body);
  }

  @Patch('deny/:id')
  async denyEnrollment(@Param('id') id: string) {
    return this.enrollmentService.denyEnrollmentRequest(id);
  }
}
