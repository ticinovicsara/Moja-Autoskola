import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [EnrollmentService, PrismaService],
  controllers: [EnrollmentController],
})
export class EnrollmentModule {}
