import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [UserModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
