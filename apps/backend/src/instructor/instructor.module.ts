import { Module } from '@nestjs/common';
import { InstructorController } from './instructor.controller';
import { InstructorService } from './instructor.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [InstructorController],
  providers: [InstructorService, PrismaService, UserService],
})
export class InstructorModule {}
