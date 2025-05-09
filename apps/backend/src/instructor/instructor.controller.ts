import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';
import { InstructorGuard } from '@/auth/guards/instructor.guard';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get('candidates/:id')
  @UseGuards(InstructorGuard)
  async getCandidates(@Param('id') instructorId: string) {
    return this.instructorService.getCandidatesForInstructor(instructorId);
  }

  @Get('slot/:id')
  @UseGuards(InstructorGuard)
  async getInstructorSlots(@Param('id') instructorId: string) {
    return this.instructorService.getInstructorSlots(instructorId);
  }

  @Post('slot')
  @UseGuards(InstructorGuard)
  async addSlot(@Body() body: AddInstructorSlotDto) {
    return this.instructorService.addInstructorSlot(body);
  }
}
