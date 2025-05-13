import { PrismaService } from '@/prisma/prisma.service';
import { UserResponseDto } from '@/user/dto/user-response.dto';
import { UserService } from '@/user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CandidateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async getCandidatesInstructor(candidateId: string) {
    await this.userService.getById(candidateId);
    const candidateInstructor = await this.prisma.candidateInstructor.findFirst(
      {
        where: { candidateId },
        include: {
          instructor: true,
        },
      },
    );

    if (!candidateInstructor) {
      throw new NotFoundException("The candidate doesn't have an instructor");
    }

    return UserResponseDto.fromPrisma(candidateInstructor.instructor);
  }
}
