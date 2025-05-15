import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { UserRole } from '@prisma/client';
import { Auth } from '@/auth/guards/auth-roles.decorator';
import { CreateDrivingSessionDto } from './dto/create-driving-session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Auth(UserRole.Instructor, UserRole.SchoolAdmin)
  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Auth(UserRole.Candidate)
  @Post('driving')
  createDrivingSession(
    @Body() createDrivingSessionDto: CreateDrivingSessionDto,
  ) {
    return this.sessionService.createDrivingSession(createDrivingSessionDto);
  }

  @Auth(UserRole.Instructor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.getById(id);
  }

  @Auth(UserRole.Candidate)
  @Get('candidate/:id')
  findCandidateSessions(@Param('id') id: string) {
    return this.sessionService.getCandidateSessions(id);
  }

  @Auth(UserRole.Instructor)
  @Get('instructor/:id')
  findInstructorSessions(@Param('id') id: string) {
    return this.sessionService.getInstructorSessions(id);
  }

  @Auth(UserRole.Instructor, UserRole.SchoolAdmin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(id, updateSessionDto);
  }

  @Auth(UserRole.Instructor, UserRole.SchoolAdmin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionService.remove(id);
  }
}
