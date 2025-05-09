import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LogInDto } from './dto/login.dto';
import { UserService } from '@/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(body: LogInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });

    if (user && (await bcrypt.compare(body.password, user.password)))
      return user;

    return null;
  }

  async login(body: LogInDto) {
    const user = await this.validateUser(body);

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      oib: user.oib,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(body: RegisterDto) {
    const min = new Date('1900-01-01');
    const max = new Date();

    if (body.dateOfBirth < min || body.dateOfBirth > max)
      throw new BadRequestException(
        'Date of birth must be between 1900 and 2025.',
      );

    const user = {
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      dateOfBirth: body.dateOfBirth,
      oib: body.oib,
    };

    const createdUser = await this.userService.create(user);

    if (!createdUser) throw new BadRequestException('Something went wrong!');

    const payload = {
      id: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
    };

    return {
      access_token: this.jwtService.sign(payload),
      createdUser,
    };
  }
}
