import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorCandidateDto } from './dto/assign-instructor.dto';
import { RemoveInstructorCandidateDto } from './dto/remove-instructor-candidate.dto';
import { UserRole } from '@prisma/client';
import { Auth } from '@/auth/guards/auth-roles.decorator';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Auth(UserRole.SchoolAdmin)
  @Post()
  async assignInstructor(@Body() body: AssignInstructorCandidateDto) {
    return this.instructorCandidateService.assignInstructorToCandidate(body);
  }

  @Auth(UserRole.SchoolAdmin)
  @Delete()
  async removeInstructor(@Body() body: RemoveInstructorCandidateDto) {
    const { instructorId, candidateId } = body;
    return this.instructorCandidateService.removeInstructorFromCandidate(
      instructorId,
      candidateId,
    );
  }
}
