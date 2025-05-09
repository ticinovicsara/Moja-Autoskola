import { Controller, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorCandidateDto } from './dto/assign-instructor.dto';
import { RemoveInstructorCandidateDto } from './dto/remove-instructor-candidate.dto';
import { SchoolAdminGuard } from '@/auth/guards/schoolAdmin.guard';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Post()
  @UseGuards(SchoolAdminGuard)
  async assignInstructor(@Body() body: AssignInstructorCandidateDto) {
    return this.instructorCandidateService.assignInstructorToCandidate(body);
  }

  @Delete()
  @UseGuards(SchoolAdminGuard)
  async removeInstructor(@Body() body: RemoveInstructorCandidateDto) {
    const { instructorId, candidateId } = body;
    return this.instructorCandidateService.removeInstructorFromCandidate(
      instructorId,
      candidateId,
    );
  }
}
