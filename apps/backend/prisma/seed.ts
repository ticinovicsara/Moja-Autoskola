import {
  UserRole,
  SessionType,
  SessionFormat,
  PrismaClient,
  EnrollmentStatus,
  Session,
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
      lastName: 'Start',
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

  const schoolAdmin2 = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Kružni tok',
      email: 'admin@kruzni.hr',
      password: await hashPassword('Adminkruzni123$'),
      role: UserRole.SchoolAdmin,
      dateOfBirth: new Date('1998-07-21'),
      oib: '11112222333',
      phoneNumber: '+385 95 533 9210',
      schoolUser: {
        create: {
          schoolId: school2.id,
        },
      },
    },
  });

  const schoolAdmin3 = await prisma.user.create({
    data: {
      firstName: 'Admin',
      lastName: 'Hajduk',
      email: 'admin@hajduk.hr',
      password: await hashPassword('Adminhajduk123$'),
      role: UserRole.SchoolAdmin,
      dateOfBirth: new Date('1998-07-21'),
      oib: '11223344556',
      phoneNumber: '+385 95 533 9210',
      schoolUser: {
        create: {
          schoolId: school3.id,
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

  const instructor3 = await prisma.user.create({
    data: {
      firstName: 'Petar',
      lastName: 'Novi',
      email: 'petar@kruznitok.hr',
      password: await hashPassword('Petar123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('1987-03-15'),
      oib: '52445543219',
      phoneNumber: '+385 91 777 1111',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });

  const instructor4 = await prisma.user.create({
    data: {
      firstName: 'Jelena',
      lastName: 'Nova',
      email: 'jelena@kruznitok.hr',
      password: await hashPassword('Jelena123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('1992-08-22'),
      oib: '52445543220',
      phoneNumber: '+385 91 777 2222',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });

  const instructor5 = await prisma.user.create({
    data: {
      firstName: 'Luka',
      lastName: 'Novi',
      email: 'luka@hajduk.hr',
      password: await hashPassword('Luka123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('1991-07-12'),
      oib: '62445543219',
      phoneNumber: '+385 92 888 1111',
      schoolUser: { create: { schoolId: school3.id } },
    },
  });

  const instructor6 = await prisma.user.create({
    data: {
      firstName: 'Maja',
      lastName: 'Nova',
      email: 'maja@hajduk.hr',
      password: await hashPassword('Maja123$'),
      role: UserRole.Instructor,
      dateOfBirth: new Date('1989-04-25'),
      oib: '62445543220',
      phoneNumber: '+385 92 888 2222',
      schoolUser: { create: { schoolId: school3.id } },
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

  const candidate4 = await prisma.user.create({
    data: {
      firstName: 'Ana',
      lastName: 'Nova',
      email: 'ana.nova@kandidat.hr',
      password: await hashPassword('Ana123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('2005-11-05'),
      oib: '58445543219',
      phoneNumber: '+385 91 777 3333',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });

  const candidate5 = await prisma.user.create({
    data: {
      firstName: 'Ivan',
      lastName: 'Novi',
      email: 'ivan.novi@kandidat.hr',
      password: await hashPassword('Ivan123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('2006-01-20'),
      oib: '58445543220',
      phoneNumber: '+385 91 777 4444',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });

  const candidate6 = await prisma.user.create({
    data: {
      firstName: 'Petar',
      lastName: 'Perić',
      email: 'petar.peric@kandidat.hr',
      password: await hashPassword('Petar123$'),
      role: UserRole.Candidate,
      dateOfBirth: new Date('2005-10-10'),
      oib: '68445543219',
      phoneNumber: '+385 92 888 3333',
      schoolUser: { create: { schoolId: school3.id } },
    },
  });

  const guest1 = await prisma.user.create({
    data: {
      firstName: 'Marija',
      lastName: 'Novi',
      email: 'marija.novi@kandidat.hr',
      password: await hashPassword('Marija123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2004-09-15'),
      oib: '58445543221',
      phoneNumber: '+385 91 777 5555',
      schoolUser: { create: { schoolId: school.id } },
    },
  });

  const guest2 = await prisma.user.create({
    data: {
      firstName: 'Ivana',
      lastName: 'Perić',
      email: 'ivana.peric@kandidat.hr',
      password: await hashPassword('Ivana123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2006-12-12'),
      oib: '68445543220',
      phoneNumber: '+385 92 888 4444',
      schoolUser: { create: { schoolId: school.id } },
    },
  });

  const guest3 = await prisma.user.create({
    data: {
      firstName: 'Marko',
      lastName: 'Perić',
      email: 'marko.peric@kandidat.hr',
      password: await hashPassword('Marko123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2004-07-07'),
      oib: '68445543221',
      phoneNumber: '+385 92 888 5555',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });
  const guest4 = await prisma.user.create({
    data: {
      firstName: 'Petra',
      lastName: 'Horvat',
      email: 'petra.horvat@guest.hr',
      password: await hashPassword('Petra123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2002-08-22'),
      oib: '23456789012',
      phoneNumber: '+385 92 222 3333',
      schoolUser: { create: { schoolId: school2.id } },
    },
  });
  const guest5 = await prisma.user.create({
    data: {
      firstName: 'Ivan',
      lastName: 'Radić',
      email: 'ivan.radic@guest.hr',
      password: await hashPassword('Ivan123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2004-05-18'),
      oib: '34567890123',
      phoneNumber: '+385 93 333 4444',
      schoolUser: { create: { schoolId: school3.id } },
    },
  });
  const guest6 = await prisma.user.create({
    data: {
      firstName: 'Maja',
      lastName: 'Babić',
      email: 'maja.babic@guest.hr',
      password: await hashPassword('Maja123$'),
      role: UserRole.Guest,
      dateOfBirth: new Date('2005-11-11'),
      oib: '45678901234',
      phoneNumber: '+385 94 444 5555',
      schoolUser: { create: { schoolId: school3.id } },
    },
  });

  await prisma.candidateInstructor.createMany({
    data: [
      { candidateId: candidate1.id, instructorId: instructor1.id },
      { candidateId: candidate2.id, instructorId: instructor1.id },
      { candidateId: candidate3.id, instructorId: instructor2.id },

      { candidateId: candidate4.id, instructorId: instructor3.id },
      { candidateId: candidate5.id, instructorId: instructor4.id },

      { candidateId: candidate6.id, instructorId: instructor5.id },
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
      {
        instructorId: instructor2.id,
        startTime: new Date('2025-05-16T10:00:00Z'),
        endTime: new Date('2025-05-16T11:00:00Z'),
      },
      {
        instructorId: instructor3.id,
        startTime: new Date('2025-05-17T09:00:00Z'),
        endTime: new Date('2025-05-17T10:00:00Z'),
      },
      {
        instructorId: instructor3.id,
        startTime: new Date('2025-05-17T10:00:00Z'),
        endTime: new Date('2025-05-17T11:00:00Z'),
      },
      {
        instructorId: instructor4.id,
        startTime: new Date('2025-05-18T09:00:00Z'),
        endTime: new Date('2025-05-18T10:00:00Z'),
      },
      {
        instructorId: instructor4.id,
        startTime: new Date('2025-05-18T10:00:00Z'),
        endTime: new Date('2025-05-18T11:00:00Z'),
      },
      {
        instructorId: instructor5.id,
        startTime: new Date('2025-05-19T09:00:00Z'),
        endTime: new Date('2025-05-19T10:00:00Z'),
      },
      {
        instructorId: instructor5.id,
        startTime: new Date('2025-05-19T10:00:00Z'),
        endTime: new Date('2025-05-19T11:00:00Z'),
      },
      {
        instructorId: instructor6.id,
        startTime: new Date('2025-05-20T09:00:00Z'),
        endTime: new Date('2025-05-20T10:00:00Z'),
      },
      {
        instructorId: instructor6.id,
        startTime: new Date('2025-05-20T10:00:00Z'),
        endTime: new Date('2025-05-20T11:00:00Z'),
      },
    ],
  });

  await prisma.session.createMany({
    data: [
      {
        schoolId: school.id,
        instructorId: instructor1.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-02T08:00:00Z'),
        endTime: new Date('2025-06-02T09:00:00Z'),
      },
      {
        schoolId: school.id,
        instructorId: instructor1.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-03T10:00:00Z'),
        endTime: new Date('2025-06-03T11:00:00Z'),
      },
      {
        schoolId: school.id,
        instructorId: instructor2.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-04T12:00:00Z'),
        endTime: new Date('2025-06-04T13:30:00Z'),
      },
      {
        schoolId: school2.id,
        instructorId: instructor3.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-02T08:00:00Z'),
        endTime: new Date('2025-06-02T09:00:00Z'),
      },
      {
        schoolId: school2.id,
        instructorId: instructor3.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-03T10:00:00Z'),
        endTime: new Date('2025-06-03T11:00:00Z'),
      },
      {
        schoolId: school2.id,
        instructorId: instructor4.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-04T12:00:00Z'),
        endTime: new Date('2025-06-04T13:30:00Z'),
      },
      {
        schoolId: school3.id,
        instructorId: instructor5.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-02T08:00:00Z'),
        endTime: new Date('2025-06-02T09:00:00Z'),
      },
      {
        schoolId: school3.id,
        instructorId: instructor5.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-03T10:00:00Z'),
        endTime: new Date('2025-06-03T11:00:00Z'),
      },
      {
        schoolId: school3.id,
        instructorId: instructor6.id,
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date('2025-06-04T12:00:00Z'),
        endTime: new Date('2025-06-04T13:30:00Z'),
      },
    ],
  });

  const schools = [school, school2, school3];

  for (let i = 0; i < schools.length; i++) {
    const school = schools[i];

    const sessionData = [
      {
        type: SessionType.Theory,
        format: SessionFormat.Lesson,
        startTime: new Date(`2025-06-01T08:00:00Z`),
        endTime: new Date(`2025-06-01T09:00:00Z`),
        schoolId: school.id,
      },
      {
        type: SessionType.FirstAid,
        format: SessionFormat.Lesson,
        startTime: new Date(`2025-06-02T10:00:00Z`),
        endTime: new Date(`2025-06-02T12:00:00Z`),
        schoolId: school.id,
      },
      {
        type: SessionType.Driving,
        format: SessionFormat.Lesson,
        startTime: new Date(`2025-06-03T14:00:00Z`),
        endTime: new Date(`2025-06-03T16:00:00Z`),
        schoolId: school.id,
      },
    ];

    const createdSessions = await Promise.all(
      sessionData.map((data) => prisma.session.create({ data })),
    );

    const candidates = [
      candidate1,
      candidate2,
      candidate3,
      candidate4,
      candidate5,
      candidate6,
    ];

    const sessionCandidateData: { sessionId: string; candidateId: string }[] =
      [];
    for (const session of createdSessions) {
      for (const candidate of candidates) {
        sessionCandidateData.push({
          sessionId: session.id,
          candidateId: candidate.id,
        });
      }
    }

    await prisma.sessionCandidate.createMany({
      data: sessionCandidateData,
    });
  }

  await prisma.testResult.createMany({
    data: [
      {
        candidateId: candidate1.id,
        date: new Date('2025-05-01T09:00:00Z'),
        type: SessionType.Theory,
        points: 85,
        passed: true,
      },
      {
        candidateId: candidate1.id,
        date: new Date('2025-05-02T09:00:00Z'),
        type: SessionType.Driving,
        points: 90,
        passed: true,
      },
      {
        candidateId: candidate2.id,
        date: new Date('2025-05-01T09:00:00Z'),
        type: SessionType.Theory,
        points: 75,
        passed: false,
      },
      {
        candidateId: candidate2.id,
        date: new Date('2025-05-02T09:00:00Z'),
        type: SessionType.Driving,
        points: 80,
        passed: true,
      },
      {
        candidateId: candidate3.id,
        date: new Date('2025-05-01T09:00:00Z'),
        type: SessionType.Theory,
        points: 92,
        passed: true,
      },
      {
        candidateId: candidate3.id,
        date: new Date('2025-05-02T09:00:00Z'),
        type: SessionType.FirstAid,
        points: 88,
        passed: true,
      },
      {
        candidateId: candidate4.id,
        date: new Date('2025-03-02T09:00:00Z'),
        type: SessionType.Theory,
        points: 88,
        passed: true,
      },
      {
        candidateId: candidate5.id,
        date: new Date('2025-05-02T09:00:00Z'),
        type: SessionType.Driving,
        points: 88,
        passed: true,
      },
      {
        candidateId: candidate5.id,
        date: new Date('2025-05-02T09:00:00Z'),
        type: SessionType.Theory,
        points: 88,
        passed: true,
      },
    ],
  });

  await prisma.enrollmentRequest.createMany({
    data: [
      {
        candidateId: candidate1.id,
        schoolId: school.id,
        status: EnrollmentStatus.Approved,
      },
      {
        candidateId: candidate2.id,
        schoolId: school.id,
        status: EnrollmentStatus.Approved,
      },

      {
        candidateId: candidate3.id,
        schoolId: school2.id,
        status: EnrollmentStatus.Approved,
      },
      {
        candidateId: candidate4.id,
        schoolId: school2.id,
        status: EnrollmentStatus.Approved,
      },

      {
        candidateId: candidate5.id,
        schoolId: school3.id,
        status: EnrollmentStatus.Approved,
      },
      {
        candidateId: candidate6.id,
        schoolId: school3.id,
        status: EnrollmentStatus.Approved,
      },

      {
        candidateId: guest1.id,
        schoolId: school.id,
        status: EnrollmentStatus.Pending,
      },
      {
        candidateId: guest2.id,
        schoolId: school.id,
        status: EnrollmentStatus.WaitingForPayment,
      },
      {
        candidateId: guest3.id,
        schoolId: school2.id,
        status: EnrollmentStatus.Pending,
      },
      {
        candidateId: guest4.id,
        schoolId: school2.id,
        status: EnrollmentStatus.WaitingForPayment,
      },
      {
        candidateId: guest5.id,
        schoolId: school3.id,
        status: EnrollmentStatus.Pending,
      },
      {
        candidateId: guest6.id,
        schoolId: school3.id,
        status: EnrollmentStatus.WaitingForPayment,
      },
    ],
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
