import { EnrollmentStatus, UserRole } from '@prisma/client';

export class EnrollmentRequestEntity {
  requestId: string;
  candidateName: string;
  role: UserRole;
  schoolName: string;
  status: EnrollmentStatus;

  static fromPrisma(data: any): EnrollmentRequestEntity {
    const entity = new EnrollmentRequestEntity();

    entity.requestId = data.id;
    entity.candidateName = `${data.candidate.firstName} ${data.candidate.lastName}`;
    entity.role = data.candidate.role;
    entity.schoolName = data.school.name;
    entity.status = data.status;

    return entity;
  }
}
