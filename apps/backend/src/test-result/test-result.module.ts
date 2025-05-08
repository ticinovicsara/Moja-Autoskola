import { Module } from '@nestjs/common';
import { TestResultService } from './test-result.service';
import { TestResultController } from './test-result.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [TestResultController],
  providers: [TestResultService, PrismaService, UserService],
})
export class TestResultModule {}
