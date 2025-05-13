import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Session } from './entities/session.entity';
import { SessionFormat, SessionType, UserRole } from '@prisma/client';
import { UserService } from '@/user/user.service';
import { CreateDrivingSessionDto } from './dto/create-driving-session.dto';
import { InstructorService } from '@/instructor/instructor.service';
import { SchoolService } from '@/school/school.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly instructorService: InstructorService,
    private readonly schoolService: SchoolService,
  ) {}

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

  async createDrivingSession(createDrivingSessionDto: CreateDrivingSessionDto) {
    const candidate = await this.userService.getById(
      createDrivingSessionDto.candidateId,
    );
    const instructorSlot = await this.instructorService.getInstructorSlotById(
      createDrivingSessionDto.instructorSlotId,
    );
    const school = await this.schoolService.getUsersSchool(candidate.id);

    await this.instructorService.deleteInstructorSlot(
      createDrivingSessionDto.instructorSlotId,
    );

    const newSession = await this.prisma.session.create({
      data: {
        schoolId: school.id,
        instructorId: createDrivingSessionDto.instructorId,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: instructorSlot.startTime,
        endTime: instructorSlot.endTime,
      },
    });

    await this.prisma.sessionCandidate.create({
      data: {
        candidateId: candidate.id,
        sessionId: newSession.id,
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

  async getCandidateSessions(id: string) {
    const user = await this.userService.getById(id);
    if (user.role !== UserRole.Candidate)
      throw new BadRequestException('The user is not a candidate');

    const sessionCandidates = await this.prisma.sessionCandidate.findMany({
      where: { candidateId: id },
      include: { session: true },
    });
    return sessionCandidates.map((c) => Session.fromPrisma(c.session));
  }

  async getInstructorSessions(id: string) {
    const user = await this.userService.getById(id);

    if (user.role !== UserRole.Instructor)
      throw new BadRequestException('The user is not a instructor');

    const sessions = await this.prisma.session.findMany({
      where: { instructorId: id },
    });
    return sessions.map((s) => Session.fromPrisma(s));
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    await this.getById(id);

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
    await this.getById(id);

    const deletedSession = await this.prisma.session.delete({ where: { id } });
    return Session.fromPrisma(deletedSession);
  }
}
