import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSchoolDto: CreateSchoolDto) {
    const newSchool = await this.prisma.school.create({
      data: {
        name: createSchoolDto.name,
        city: createSchoolDto.city,
        address: createSchoolDto.address,
        contactNumber: createSchoolDto.contactNumber,
        email: createSchoolDto.email,
        enrollmentFee: createSchoolDto.enrollmentFee,
        info: createSchoolDto.info,
        websiteUrl: createSchoolDto.websiteUrl,
        imageUrl: createSchoolDto.imageUrl,
      },
    });

    return School.fromPrisma(newSchool);
  }

  async getAll() {
    const schools = await this.prisma.school.findMany();
    return schools.map((s) => School.fromPrisma(s));
  }

  async getById(id: string) {
    const school = await this.prisma.school.findUnique({ where: { id } });
    if (!school) throw new NotFoundException("The school doesn't exist");
    return School.fromPrisma(school);
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    const school = await this.getById(id);
    if (!school) throw new NotFoundException("The school doesn't exist");

    const updatedSchool = await this.prisma.school.update({
      where: { id },
      data: {
        name: updateSchoolDto.name,
        city: updateSchoolDto.city,
        address: updateSchoolDto.address,
        contactNumber: updateSchoolDto.contactNumber,
        email: updateSchoolDto.email,
        enrollmentFee: updateSchoolDto.enrollmentFee,
        info: updateSchoolDto.info,
        websiteUrl: updateSchoolDto.websiteUrl,
        imageUrl: updateSchoolDto.imageUrl,
      },
    });
    return School.fromPrisma(updatedSchool);
  }

  async remove(id: string) {
    const school = await this.getById(id);
    if (!school) throw new NotFoundException("The school doesn't exist");
    const deletedSchool = await this.prisma.school.delete({ where: { id } });
    return School.fromPrisma(deletedSchool);
  }
}
