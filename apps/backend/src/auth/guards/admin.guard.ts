import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from '@prisma/client';

@Injectable()
export class AdminGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext) {
    const baseGuardResult = await super.canActivate(context);
    if (!baseGuardResult) {
      return false;
    }

    const { user } = context.switchToHttp().getRequest();

    return user.role === UserRole.Admin;
  }
}
