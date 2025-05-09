import { Module } from '@nestjs/common';
import { InstructorCandidateService } from './instructor-candidate.service';
import { InstructorCandidateController } from './instructor-candidate.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

@Module({
  providers: [InstructorCandidateService, PrismaService, UserService],
  controllers: [InstructorCandidateController],
})
export class InstructorCandidateModule {}
