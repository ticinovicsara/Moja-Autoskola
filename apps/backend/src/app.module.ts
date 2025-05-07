import { Module, Scope } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    UserModule,
    SessionModule,
    SchoolModule,
    AuthModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
