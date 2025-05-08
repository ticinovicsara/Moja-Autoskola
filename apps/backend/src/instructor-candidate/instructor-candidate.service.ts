import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { EnrollmentStatus } from '@prisma/client';
import { AssignInstructorDto } from './dto/assign-instructor.dto';
import { InstructorCandidate } from './entities/instructor-candidate.entity';

@Injectable()
export class InstructorCandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllInstructorCandidates() {
    const allInstructorCandidates =
      await this.prisma.candidateInstructor.findMany({
        include: {
          instructor: true,
          candidate: true,
        },
      });

    return allInstructorCandidates.map(InstructorCandidate.fromPrisma);
  }

  async assignInstructorToCandidate(body: AssignInstructorDto) {
    const { candidateId, instructorId } = body;

    const candidate = await this.prisma.user.findUnique({
      where: { id: candidateId },
    });

    if (!candidate) {
      throw new NotFoundException('Candidate not found.');
    }

    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });

    if (!instructor) {
      throw new NotFoundException('Instructor not found.');
    }

    const existingRelation = await this.prisma.candidateInstructor.findUnique({
      where: {
        instructorId_candidateId: {
          instructorId,
          candidateId,
        },
      },
    });

    if (existingRelation) {
      throw new ConflictException(
        'Instructor already assigned to this candidate.',
      );
    }

    const result = await this.prisma.candidateInstructor.create({
      data: {
        candidate: { connect: { id: candidateId } },
        instructor: { connect: { id: instructorId } },
      },
    });

    if (!result) {
      throw new NotFoundException('Error assigning instructor.');
    }

    return { message: 'Instructor assigned to the candidate successfully.' };
  }

  async removeInstructorFromCandidate(
    instructorId: string,
    candidateId: string,
  ) {
    const candidateInstructor =
      await this.prisma.candidateInstructor.findUnique({
        where: {
          instructorId_candidateId: {
            instructorId,
            candidateId,
          },
        },
      });

    if (!candidateInstructor) {
      throw new NotFoundException(
        'Instructor and Candidate association not found.',
      );
    }

    await this.prisma.candidateInstructor.delete({
      where: {
        instructorId_candidateId: {
          instructorId,
          candidateId,
        },
      },
    });

    return { message: 'Instructor removed from candidate successfully.' };
  }
}
