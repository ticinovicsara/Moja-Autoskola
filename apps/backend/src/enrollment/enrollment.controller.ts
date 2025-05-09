import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { RequestEnrollmentDto } from './dto/request-enrollment.dto';
import { EnrollmentStatus } from '@prisma/client';
import { UpdateRequestDto } from './dto/update-request.dto';
import { AdminGuard } from '@/auth/guards/admin.guard';
import { CandidateGuard } from '@/auth/guards/candidate.guard';
import { SchoolAdminGuard } from '@/auth/guards/schoolAdmin.guard';
import { GuestGuard } from '@/auth/guards/guest.guard';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  @UseGuards(AdminGuard)
  async getEnrollmentRequests(@Query('status') status?: EnrollmentStatus) {
    return this.enrollmentService.getEnrollmentRequests(status);
  }

  @Get('candidate/:id')
  @UseGuards(CandidateGuard)
  async getCandidateEnrollmentRequests(@Param('id') candidateId: string) {
    return this.enrollmentService.getCandidateEnrollmentRequests(candidateId);
  }

  @Get('school/:id')
  @UseGuards(SchoolAdminGuard)
  async getSchoolEnrollmentRequests(@Param('id') schoolId: string) {
    return this.enrollmentService.getSchoolEnrollmentRequests(schoolId);
  }

  @Post()
  @UseGuards(GuestGuard)
  async requestEnrollment(@Body() body: RequestEnrollmentDto) {
    return this.enrollmentService.requestEnrollment(body);
  }

  @Patch()
  @UseGuards(SchoolAdminGuard)
  async updateEnrollmentStatus(@Body() body: UpdateRequestDto) {
    return this.enrollmentService.updateEnrollmentStatus(body);
  }

  @Delete(':id')
  @UseGuards(SchoolAdminGuard)
  async deleteEnrollmentRequest(@Param('id') id: string) {
    return this.enrollmentService.deleteEnrollmentRequest(id);
  }
}
