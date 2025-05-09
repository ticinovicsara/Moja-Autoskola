import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InstructorGuard } from '@/auth/guards/instructor.guard';
import { AdminGuard } from '@/auth/guards/admin.guard';
import { CandidateGuard } from '@/auth/guards/candidate.guard';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  @UseGuards(InstructorGuard)
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.sessionService.getAll();
  }

  @Get(':id')
  @UseGuards(InstructorGuard)
  findOne(@Param('id') id: string) {
    return this.sessionService.getById(id);
  }

  @Get('candidate/:id')
  @UseGuards(CandidateGuard)
  findCandidateSessions(@Param('id') id: string) {
    return this.sessionService.getCandidateSessions(id);
  }

  @Get('instructor/:id')
  @UseGuards(InstructorGuard)
  findInstructorSessions(@Param('id') id: string) {
    return this.sessionService.getInstructorSessions(id);
  }

  @Patch(':id')
  @UseGuards(InstructorGuard)
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  @UseGuards(InstructorGuard)
  remove(@Param('id') id: string) {
    return this.sessionService.remove(id);
  }
}
