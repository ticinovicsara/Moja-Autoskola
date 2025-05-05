import {
  UserRole,
  SessionType,
  SessionFormat,
  PrismaClient,
  EnrollmentStatus,
} from '@prisma/client';
import bcrypt from 'bcrypt';

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

const prisma = new PrismaClient();

async function main() {
  console.log('Početak seeda...');

  const admin = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'System',
      email: 'admin@admin.hr',
      password: await hashPassword('admin123'),
      role: UserRole.Admin,
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
    },
  });

  const schoolAdmin = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Skole',
      email: 'admin@autoskola.hr',
      password: await hashPassword('adminskole123'),
      role: UserRole.SchoolAdmin,
      schoolUsers: {
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
      password: await hashPassword('ivan123'),
      role: UserRole.Instructor,
      schoolUsers: {
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
      password: await hashPassword('marko123'),
      role: UserRole.Instructor,
      schoolUsers: {
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
      password: await hashPassword('ana123'),
      role: UserRole.Candidate,
      schoolUsers: {
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
      password: await hashPassword('luka123'),
      role: UserRole.Candidate,
      schoolUsers: {
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
      password: await hashPassword('iva123'),
      role: UserRole.Candidate,
      schoolUsers: {
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
        day: 'Monday',
        startTime: new Date('2025-05-12T10:00:00Z'),
      },
      {
        instructorId: instructor1.id,
        day: 'Wednesday',
        startTime: new Date('2025-05-14T12:00:00Z'),
      },
      {
        instructorId: instructor2.id,
        day: 'Tuesday',
        startTime: new Date('2025-05-13T14:00:00Z'),
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
      status: EnrollmentStatus.Pending,
    },
  });

  console.log('Seed uspjesno zavrsen.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
