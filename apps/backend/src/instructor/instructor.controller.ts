import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get('candidates/:id')
  async getCandidates(@Param('id') instructorId: string) {
    return this.instructorService.getCandidatesForInstructor(instructorId);
  }

  @Get('slot/:id')
  async getInstructorSlots(@Param('id') instructorId: string) {
    return this.instructorService.getInstructorSlots(instructorId);
  }

  @Post('slot')
  async addSlot(@Body() body: AddInstructorSlotDto) {
    return this.instructorService.addInstructorSlot(body);
  }
}
