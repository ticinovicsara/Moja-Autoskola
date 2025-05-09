import {
  CandidateInstructor as PrismaCandidateInstructor,
  User,
} from '@prisma/client';

export class InstructorCandidate {
  id: string;
  instructorId: string;
  candidateId: string;
  instructor: User;
  candidate: User;

  constructor(
    id: string,
    instructorId: string,
    candidateId: string,
    instructor: User,
    candidate: User,
  ) {
    this.id = id;
    this.instructorId = instructorId;
    this.candidateId = candidateId;
    this.instructor = instructor;
    this.candidate = candidate;
  }

  static fromPrisma(
    data: PrismaCandidateInstructor & {
      instructor: User;
      candidate: User;
    },
  ): InstructorCandidate {
    return new InstructorCandidate(
      data.id,
      data.instructorId,
      data.candidateId,
      data.instructor,
      data.candidate,
    );
  }
}
