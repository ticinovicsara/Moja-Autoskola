import { Controller, Post, Body } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { AssignInstructorDto } from './dto/assign-instructor.dto';

@Controller('instructor-candidate')
export class InstructorCandidateController {
  constructor(
    private readonly instructorCandidateService: InstructorCandidateService,
  ) {}

  @Post('assign-instructor')
  async assignInstructor(@Body() body: AssignInstructorDto) {
    return this.instructorCandidateService.assignInstructorToCandidate(body);
  }
}
