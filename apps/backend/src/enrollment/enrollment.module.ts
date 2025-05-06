import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentHelperService } from './helpers/enrollment.helper';

@Module({
  providers: [EnrollmentService, PrismaService, EnrollmentHelperService],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
