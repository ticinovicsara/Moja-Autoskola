import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SessionModule } from './session/session.module';
import { InstructorCandidateModule } from './instructor-candidate/instructor-candidate.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    UserModule,
    SessionModule,
    InstructorCandidateModule,
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
