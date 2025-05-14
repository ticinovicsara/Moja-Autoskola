import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { UserService } from '@/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { SchoolService } from '@/school/school.service';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService, UserService, SchoolService],
})
export class CandidateModule {}
