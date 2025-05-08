import { Module } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { InstructorCandidateController } from './instructor-candidate.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  providers: [InstructorCandidateService, PrismaService],
  controllers: [InstructorCandidateController],
})
export class InstructorCandidateModule {}
