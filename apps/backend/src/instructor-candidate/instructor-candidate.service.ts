import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AssignInstructorCandidateDto } from './dto/assign-instructor.dto';
import { InstructorCandidate } from './entities/instructor-candidate.entity';
import { UserService } from '@/user/user.service';
import { UserResponseDto } from '@/user/dto/user-response.dto';

@Injectable()
export class InstructorCandidateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getInstructorFromCandidate(candidateId: string) {
    const result = await this.prisma.candidateInstructor.findFirst({
      where: { candidateId },
      include: {
        instructor: true,
      },
    });

    if (!result || !result.instructor) {
      return null;
    }

    return UserResponseDto.fromPrisma(result.instructor);
  }

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

  async assignInstructorToCandidate(body: AssignInstructorCandidateDto) {
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

    const candidateAlreadyAssigned =
      await this.prisma.candidateInstructor.findFirst({
        where: {
          candidateId,
        },
      });

    if (candidateAlreadyAssigned) {
      throw new ConflictException(
        'Candidate is already assigned to another instructor.',
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
