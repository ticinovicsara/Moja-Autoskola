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

  async addCandidateToSchool(candidateId: string, schoolId: string) {
    const alreadyInSchool = await this.prisma.schoolUser.findFirst({
      where: { userId: candidateId, schoolId },
    });

    if (!alreadyInSchool) {
      await this.prisma.schoolUser.create({
        data: { userId: candidateId, schoolId },
      });
    }
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

  async getUsersSchool(userId: string) {
    const userSchool = await this.prisma.schoolUser.findFirst({
      where: { userId },
      include: { school: true },
    });
    if (!userSchool) throw new NotFoundException("The user isn't in a school");
    return School.fromPrisma(userSchool.school);
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    await this.getById(id);

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
    await this.getById(id);

    const deletedSchool = await this.prisma.school.delete({ where: { id } });
    return School.fromPrisma(deletedSchool);
  }
}
