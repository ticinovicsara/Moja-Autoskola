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
import { EnrollmentStatus, UserRole } from '@prisma/client';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Auth } from '@/auth/guards/auth-roles.decorator';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Auth(UserRole.Admin)
  @Get()
  async getEnrollmentRequests(@Query('status') status?: EnrollmentStatus) {
    return this.enrollmentService.getEnrollmentRequests(status);
  }

  @Auth(UserRole.Candidate, UserRole.Guest)
  @Get('candidate/:id')
  async getCandidateEnrollmentRequests(@Param('id') candidateId: string) {
    return this.enrollmentService.getCandidateEnrollmentRequests(candidateId);
  }

  @Auth(UserRole.SchoolAdmin)
  @Get('school/:id')
  async getSchoolEnrollmentRequests(@Param('id') schoolId: string) {
    return this.enrollmentService.getSchoolEnrollmentRequests(schoolId);
  }

  @Auth(UserRole.SchoolAdmin)
  @Post()
  async requestEnrollment(@Body() body: RequestEnrollmentDto) {
    return this.enrollmentService.requestEnrollment(body);
  }

  @Auth(UserRole.SchoolAdmin)
  @Patch()
  async updateEnrollmentStatus(@Body() body: UpdateRequestDto) {
    return this.enrollmentService.updateEnrollmentStatus(body);
  }

  @Auth(UserRole.SchoolAdmin)
  @Delete(':id')
  async deleteEnrollmentRequest(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollmentRequest(id);
  }
}
