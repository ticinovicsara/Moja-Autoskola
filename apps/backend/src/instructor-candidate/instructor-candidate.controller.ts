import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorDto } from './dto/assign-instructor.dto';
import { RemoveInstructorCandidateDto } from './dto/remove-instructor-candidate.dto';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Get()
  async getAllInstructorCandidates() {
    return this.instructorCandidateService.getAllInstructorCandidates();
  }

  @Post()
  async assignInstructor(@Body() body: AssignInstructorDto) {
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
