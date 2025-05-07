import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorDto } from './dto/assign-instructor.dto';
import { RemoveInstructorDto } from './dto/remove-instructor.dto';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Get()
  async getAllInstructorCandidates() {
    return this.instructorCandidateService.getAllInstructorCandidates();
  }

  @Post('assign')
  async assignInstructor(@Body() body: AssignInstructorDto) {
    return this.instructorCandidateService.assignInstructorToCandidate(body);
  }

  @Delete()
  async removeInstructor(@Body() removeInstructorDto: RemoveInstructorDto) {
    const { instructorId, candidateId } = removeInstructorDto;
    return this.instructorCandidateService.removeInstructorFromCandidate(
      instructorId,
      candidateId,
    );
  }
}
