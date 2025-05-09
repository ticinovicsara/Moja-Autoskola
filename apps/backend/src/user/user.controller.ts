import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AdminGuard } from '@/auth/guards/admin.guard';
import { SchoolAdminGuard } from '@/auth/guards/schoolAdmin.guard';
import { CandidateGuard } from '@/auth/guards/candidate.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(SchoolAdminGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(AdminGuard)
  findAll() {
    return this.userService.getAll();
  }

  @Get(':email')
  @UseGuards(SchoolAdminGuard)
  findOne(@Param('email') email: string) {
    return this.userService.getByEmail(email);
  }

  @Get('progress/:id')
  @UseGuards(CandidateGuard)
  findCandidateProgress(@Param('id') id: string) {
    return this.userService.getCandidateProgress(id);
  }

  @Patch(':id')
  @UseGuards(CandidateGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(SchoolAdminGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
