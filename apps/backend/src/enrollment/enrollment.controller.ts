import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { AssignInstructorDto } from './dto/assign-instructor.dto';

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
  approveRequest(@Body() body: { id: string }) {
    return this.enrollmentService.approveEnrollmentRequest(body.id);
  }

  @Patch('confirm-payment')
  async confirmPayment(@Body() body: { id: string }) {
    return this.enrollmentService.confirmPayment(body.id);
  }

  @Patch('assign-instructor')
  async assignInstructor(@Body() body: AssignInstructorDto) {
    return this.enrollmentService.assignInstructor(body);
  }

  @Patch('deny/:id')
  async denyEnrollment(@Param('id') id: string) {
    return this.enrollmentService.denyEnrollmentRequest(id);
  }

  @Delete(':id')
  async deleteEnrollmentRequest(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollmentRequest(id);
  }
}
