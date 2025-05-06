import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [UserModule, PrismaModule, UserModule, InstructorModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
