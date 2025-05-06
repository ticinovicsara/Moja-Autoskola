import { Controller, Get, Param } from '@nestjs/common';
import { InstructorService } from './instructor.service';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get(':id/candidates')
  async getCandidates(@Param('id') instructorId: string) {
    return this.instructorService.getCandidatesForInstructor(instructorId);
  }
}
