import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class InstructorService {
  constructor(private readonly prisma: PrismaService) {}

  async getCandidatesForInstructor(instructorId: string) {
    const instructor = await this.prisma.user.findUnique({
      where: { id: instructorId },
    });

    if (!instructor || instructor.role !== 'Instructor') {
      throw new NotFoundException('Instructor not found.');
    }

    const pairs = await this.prisma.candidateInstructor.findMany({
      where: { instructorId },
      include: {
        candidate: true,
      },
    });

    if (!pairs.length) {
      throw new NotFoundException('No candidates assigned to this instructor.');
    }

    return pairs.map((pair) => ({
      id: pair.candidate.id,
      name: `${pair.candidate.firstName} ${pair.candidate.lastName}`,
      email: pair.candidate.email,
      role: pair.candidate.role,
    }));
  }
}
