import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AssignInstructorDto } from './dto/assign-instructor.dto';
import { InstructorCandidate } from './entities/instructor-candidate.entity';
import { UserService } from '@/user/user.service';

@Injectable()
export class InstructorCandidateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

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

    await this.userService.getById(candidateId);

    await this.userService.getById(instructorId);

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
