import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';

@Module({
  controllers: [SessionController],
  providers: [SessionService, PrismaService, UserService],
})
export class SessionModule {}
