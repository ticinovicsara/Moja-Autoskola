import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { AddInstructorSlotDto } from './dto/add-instructor-slot.dto';
import { Auth } from '@/auth/guards/auth-roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Auth(UserRole.Instructor)
  @Get('candidates/:id')
  async getCandidates(@Param('id') instructorId: string) {
    return this.instructorService.getCandidatesForInstructor(instructorId);
  }

  @Get('by-school/:schoolId')
  async getInstructorsBySchool(@Param('schoolId') schoolId: string) {
    return this.instructorService.getInstructorsBySchool(schoolId);
  }

  @Auth(UserRole.Candidate, UserRole.Instructor)
  @Get('slot/:instructorId')
  async getInstructorSlots(@Param('instructorId') instructorId: string) {
    return this.instructorService.getInstructorSlots(instructorId);
  }

  @Auth(UserRole.Instructor)
  @Post('slot')
  async addSlot(@Body() body: AddInstructorSlotDto) {
    return this.instructorService.addInstructorSlot(body);
  }
}
