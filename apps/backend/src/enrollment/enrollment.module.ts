import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentHelperService } from './helpers/enrollment.helper';
import { UserService } from '@/user/user.service';
import { SchoolService } from '@/school/school.service';

@Module({
  providers: [
    EnrollmentService,
    PrismaService,
    EnrollmentHelperService,
    UserService,
    SchoolService,
  ],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
