import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { GuestEnrollmentModule } from './guest-enrollment/guest-enrollment.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [GuestEnrollmentModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
