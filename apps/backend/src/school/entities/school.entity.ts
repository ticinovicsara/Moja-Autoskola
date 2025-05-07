import { School as PrismaSchool } from '@prisma/client';

export class School {
  id: string;
  name: string;
  city: string;
  address: string;
  contactNumber: string;
  email: string;
  enrollmentFee: number;
  info: string | null;
  websiteUrl: string | null;
  imageUrl: string | null;

  constructor(
    id: string,
    name: string,
    city: string,
    address: string,
    contactNumber: string,
    email: string,
    enrollmentFee: number,
    info: string | null,
    websiteUrl: string | null,
    imageUrl: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.address = address;
    this.contactNumber = contactNumber;
    this.email = email;
    this.enrollmentFee = enrollmentFee;
    this.info = info;
    this.websiteUrl = websiteUrl;
    this.imageUrl = imageUrl;
  }

  static fromPrisma(prismaSchool: PrismaSchool | null) {
    if (prismaSchool === null) return null;

    return new School(
      prismaSchool.id,
      prismaSchool.name,
      prismaSchool.city,
      prismaSchool.address,
      prismaSchool.contactNumber,
      prismaSchool.email,
      Number(prismaSchool.enrollmentFee),
      prismaSchool.info,
      prismaSchool.websiteUrl,
      prismaSchool.imageUrl,
    );
  }
}
