import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSessionDto: CreateSessionDto) {
    if (createSessionDto.startTime >= createSessionDto.endTime)
      throw new BadRequestException('Start time must be before end time');

    const newSession = await this.prisma.session.create({
      data: {
        schoolId: createSessionDto.schoolId,
        instructorId: createSessionDto.instructorId,
        type: createSessionDto.type,
        format: createSessionDto.format,
        startTime: createSessionDto.startTime,
        endTime: createSessionDto.endTime,
      },
    });

    return Session.fromPrisma(newSession);
  }

  async getAll() {
    const sessions = await this.prisma.session.findMany();
    return sessions.map((u) => Session.fromPrisma(u));
  }

  async getById(id: string) {
    const session = await this.prisma.session.findUnique({ where: { id } });
    if (!session) throw new BadRequestException("The session doesn't exist");
    return Session.fromPrisma(session);
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    const session = await this.getById(id);
    if (!session) throw new NotFoundException("The session doesn't exist");

    const updatedSession = await this.prisma.session.update({
      where: { id },
      data: {
        schoolId: updateSessionDto.schoolId,
        instructorId: updateSessionDto.instructorId,
        type: updateSessionDto.type,
        format: updateSessionDto.format,
        startTime: updateSessionDto.startTime,
        endTime: updateSessionDto.endTime,
      },
    });

    return Session.fromPrisma(updatedSession);
  }

  async remove(id: string) {
    const session = await this.getById(id);
    if (!session) throw new NotFoundException("The session doesn't exist");
    const deletedSession = await this.prisma.session.delete({ where: { id } });
    return Session.fromPrisma(deletedSession);
  }
}
