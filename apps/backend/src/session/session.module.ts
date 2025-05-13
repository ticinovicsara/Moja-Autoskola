import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { InstructorService } from '@/instructor/instructor.service';
import { SchoolService } from '@/school/school.service';

@Module({
  controllers: [SessionController],
  providers: [
    SessionService,
    PrismaService,
    UserService,
    InstructorService,
    SchoolService,
  ],
})
export class SessionModule {}
