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

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.getById(id);
  }

  @Get('candidate/:id')
  findCandidateSessions(@Param('id') id: string) {
    return this.sessionService.getCandidateSessions(id);
  }

  @Get('instructor/:id')
  findInstructorSessions(@Param('id') id: string) {
    return this.sessionService.getInstructorSessions(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionService.remove(id);
  }
}
