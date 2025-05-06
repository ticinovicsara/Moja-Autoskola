import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SessionModule } from './session/session.module';
import { TestResultModule } from './test-result/test-result.module';

@Module({
  imports: [UserModule, PrismaModule, UserModule, SessionModule, TestResultModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
