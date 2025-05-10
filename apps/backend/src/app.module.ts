import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { InstructorCandidateModule } from './instructor-candidate/instructor-candidate.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';
import { TestResultModule } from './test-result/test-result.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { PrismaModule } from './prisma/prisma.module';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    SessionModule,
    InstructorCandidateModule,
    SchoolModule,
    AuthModule,
    TestResultModule,
    EnrollmentModule,
    InstructorModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
