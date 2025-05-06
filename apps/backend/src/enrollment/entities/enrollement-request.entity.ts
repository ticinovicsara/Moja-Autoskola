import { EnrollmentStatus, UserRole } from '@prisma/client';

export class EnrollmentRequestEntity {
  requestId: string;
  candidateId: string;
  candidateName: string;
  candidateEmail: string;
  role: UserRole;
  schoolId: string;
  schoolName: string;
  status: EnrollmentStatus;
  denialReason?: string | null;

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
