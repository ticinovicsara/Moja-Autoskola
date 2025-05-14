import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Auth } from '@/auth/guards/auth-roles.decorator';
import { UserRole } from '@prisma/client';
import { User } from '@/user/entities/user.entity';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Auth(UserRole.Admin)
  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Auth(UserRole.Admin, UserRole.Guest)
  @Get()
  findAll() {
    return this.schoolService.getAll();
  }
  @Auth(UserRole.SchoolAdmin)
  @Get('by-user/:userId')
  async getSchoolByUser(@Param('userId') userId: string) {
    return this.schoolService.getUsersSchool(userId);
  }

  @Auth(UserRole.Admin)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolService.getById(id);
  }

  @Auth(UserRole.SchoolAdmin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolService.update(id, updateSchoolDto);
  }

  @Auth(UserRole.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolService.remove(id);
  }
}
