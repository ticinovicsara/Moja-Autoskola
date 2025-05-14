import {
  UserRole,
  SessionType,
  SessionFormat,
  PrismaClient,
  EnrollmentStatus,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'System',
      email: 'admin@admin.hr',
      password: await hashPassword('Admin123$'),
      dateOfBirth: new Date('2000-02-02'),
      role: UserRole.Admin,
      phoneNumber: '+385 95 533 9200',
      oib: '12345543219',
    },
  });

  const school = await prisma.school.create({
    data: {
      name: 'Autoškola Start',
      city: 'Zagreb',
      address: 'Ulica A. Šenoe 5',
      contactNumber: '0911234567',
      email: 'kontakt@autoskola.hr',
      enrollmentFee: 150.0,
      info: 'Najmodernija autoškola u Zagrebu.',
      websiteUrl: 'https://www.autoskola-start.hr',
      imageUrl:
        'https://www.autoskolastart.hr/wp-content/themes/sage/dist/images/logo/autoskola_start_logo_full.svg',
      rating: 4.8,
    },
  });

  const school2 = await prisma.school.create({
    data: {
      name: 'Kružni tok',
      city: 'Split',
      address: 'Ulica Domovinskog rata 5',
      contactNumber: '+385 91 892 1344',
      email: 'kontaktkruzni@autoskola.hr',
      enrollmentFee: 150.0,
      info: 'Najprovjerenija autoškola u Splitu.',
      websiteUrl: 'https://kruznitok.hr/',
      imageUrl:
        'https://kruznitok.hr/wp-content/uploads/2020/01/logo-autoskola-kt-web.png',
      rating: 4.8,
    },
  });

  const school3 = await prisma.school.create({
    data: {
      name: 'Hajduk',
      city: 'Split',
      address: 'Ulica A. Matoša 5',
      contactNumber: '+385 92 999 0123',
      email: 'kontakthajduk@autoskola.hr',
      enrollmentFee: 140.0,
      info: 'Najmodernija autoškola u Splitu.',
      websiteUrl: 'https://www.autoskola-hajduk.hr/',
      imageUrl:
        'https://www.autoskola-hajduk.hr/wp-content/uploads/2021/01/logo-Hajduk-i-Hr-kvaliteta.png',
      rating: 4.9,
    },
  });

  const schoolAdmin = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Skole',
      email: 'admin@autoskola.hr',
      password: await hashPassword('Adminskole123$'),
      role: UserRole.SchoolAdmin,
      dateOfBirth: new Date('1998-07-21'),
      oib: '12345543210',
      phoneNumber: '+385 95 533 9210',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  const instructor1 = await prisma.user.create({
    data: {
      firstName: 'Ivan',
      lastName: 'Instruktor',
      email: 'ivan@autoskola.hr',
      password: await hashPassword('Ivan123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('2003-10-20'),
      oib: '12445543219',
      phoneNumber: '+385 95 312 3124',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  const instructor2 = await prisma.user.create({
    data: {
      firstName: 'Marko',
      lastName: 'Vozac',
      email: 'marko@autoskola.hr',
      password: await hashPassword('Marko123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('2007-02-11'),
      oib: '92445543219',
      phoneNumber: '+385 95 312 1111',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  const candidate1 = await prisma.user.create({
    data: {
      firstName: 'Ana',
      lastName: 'Kandidat',
      email: 'ana@kandidat.hr',
      password: await hashPassword('Ana123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('2004-02-15'),
      oib: '88445543219',
      phoneNumber: '+385 95 312 3555',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  const candidate2 = await prisma.user.create({
    data: {
      firstName: 'Luka',
      lastName: 'Novak',
      email: 'luka@kandidat.hr',
      password: await hashPassword('Luka123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('2006-07-25'),
      oib: '12445543201',
      phoneNumber: '+385 95 312 9563',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  const candidate3 = await prisma.user.create({
    data: {
      firstName: 'Iva',
      lastName: 'Perić',
      email: 'iva@kandidat.hr',
      password: await hashPassword('Iva123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('1988-07-21'),
      oib: '12445543989',
      phoneNumber: '+385 95 788 4521',
      schoolUser: {
        create: {
          schoolId: school.id,
        },
      },
    },
  });

  await prisma.candidateInstructor.createMany({
    data: [
      { candidateId: candidate1.id, instructorId: instructor1.id },
      { candidateId: candidate2.id, instructorId: instructor1.id },
      { candidateId: candidate3.id, instructorId: instructor2.id },
    ],
  });

  await prisma.instructorSlot.createMany({
    data: [
      {
        instructorId: instructor1.id,
        startTime: new Date('2025-05-15T09:00:00Z'),
        endTime: new Date('2025-05-15T10:00:00Z'),
      },
      {
        instructorId: instructor1.id,
        startTime: new Date('2025-05-15T10:00:00Z'),
        endTime: new Date('2025-05-15T11:00:00Z'),
      },
      {
        instructorId: instructor2.id,
        startTime: new Date('2025-05-16T09:00:00Z'),
        endTime: new Date('2025-05-16T10:00:00Z'),
      },
    ],
  });

  await prisma.session.create({
    data: {
      schoolId: school.id,
      instructorId: instructor1.id,
      type: SessionType.Theory,
      format: SessionFormat.Lesson,
      startTime: new Date('2025-05-10T09:00:00Z'),
      endTime: new Date('2025-05-10T11:00:00Z'),
      candidates: {
        create: [
          { candidateId: candidate1.id },
          { candidateId: candidate2.id },
        ],
      },
    },
  });

  await prisma.enrollmentRequest.create({
    data: {
      candidateId: candidate1.id,
      schoolId: school.id,
      status: EnrollmentStatus.Approved,
    },
  });

  await prisma.enrollmentRequest.create({
    data: {
      candidateId: candidate2.id,
      schoolId: school.id,
      status: EnrollmentStatus.Approved,
    },
  });

  await prisma.enrollmentRequest.create({
    data: {
      candidateId: candidate3.id,
      schoolId: school.id,
      status: EnrollmentStatus.Pending,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
