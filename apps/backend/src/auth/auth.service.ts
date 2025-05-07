import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LogInDto } from './dto/login.dto';
import { UserService } from '@/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(body: LogInDto) {
    const user = await this.userService.getByEmail(body.email);

    if (user && (await bcrypt.compare(body.password, user.password))) {
      return user;
    }

    return null;
  }

  async login(body: LogInDto) {
    const user = await this.validateUser(body);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
