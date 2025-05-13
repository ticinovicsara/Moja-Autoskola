import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { UserService } from '@/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService, UserService],
})
export class CandidateModule {}
