import { Controller, Post, Body, Delete } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorCandidateDto } from './dto/assign-instructor.dto';
import { RemoveInstructorCandidateDto } from './dto/remove-instructor-candidate.dto';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Post()
  async assignInstructor(@Body() body: AssignInstructorCandidateDto) {
    return this.instructorCandidateService.assignInstructorToCandidate(body);
  }

  @Delete()
  async removeInstructor(@Body() body: RemoveInstructorCandidateDto) {
    const { instructorId, candidateId } = body;
    return this.instructorCandidateService.removeInstructorFromCandidate(
      instructorId,
      candidateId,
    );
  }
}
