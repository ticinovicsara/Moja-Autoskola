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
  rating: number;

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
    rating: number,
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
    this.rating = rating;
  }

  static fromPrisma(prismaSchool: PrismaSchool) {
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
      Number(prismaSchool.rating),
    );
  }
}
