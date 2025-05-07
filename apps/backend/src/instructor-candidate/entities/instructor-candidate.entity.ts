import { CandidateInstructor as PrismaCandidateInstructor } from '@prisma/client';

export class InstructorCandidate {
  id: string;
  instructorId: string;
  candidateId: string;
  instructorFirstName: string;
  instructorLastName: string;
  candidateFirstName: string;
  candidateLastName: string;

  constructor(
    id: string,
    instructorId: string,
    candidateId: string,
    instructorFirstName: string,
    instructorLastName: string,
    candidateFirstName: string,
    candidateLastName: string,
  ) {
    this.id = id;
    this.instructorId = instructorId;
    this.candidateId = candidateId;
    this.instructorFirstName = instructorFirstName;
    this.instructorLastName = instructorLastName;
    this.candidateFirstName = candidateFirstName;
    this.candidateLastName = candidateLastName;
  }

  static fromPrisma(
    data: PrismaCandidateInstructor & {
      instructor: { id: string; firstName: string; lastName: string };
      candidate: { id: string; firstName: string; lastName: string };
    },
  ): InstructorCandidate {
    return new InstructorCandidate(
      data.id,
      data.instructor.id,
      data.candidate.id,
      data.instructor.firstName,
      data.instructor.lastName,
      data.candidate.firstName,
      data.candidate.lastName,
    );
  }
}
