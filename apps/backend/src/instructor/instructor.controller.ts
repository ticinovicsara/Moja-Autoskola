import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get(':id/candidates')
  async getCandidates(@Param('id') instructorId: string) {
    return this.instructorService.getCandidatesForInstructor(instructorId);
  }

  @Get('slots/:instructorId')
  async getInstructorSlots(@Param('instructorId') instructorId: string) {
    return this.instructorService.getInstructorSlots(instructorId);
  }

  @Post('add-slot')
  async addSlot(@Body() body: AddInstructorSlotDto) {
    return this.instructorService.addInstructorSlot(body);
  }
}
