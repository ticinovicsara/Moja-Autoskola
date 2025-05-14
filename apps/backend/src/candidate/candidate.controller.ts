import { Controller, Get, Param } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { Auth } from '@/auth/guards/auth-roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Auth(UserRole.Candidate)
  @Get('instructor/:candidateId')
  findCandidatesInstructor(@Param('candidateId') candidateId: string) {
    return this.candidateService.getCandidatesInstructor(candidateId);
  }

  @Auth(UserRole.SchoolAdmin, UserRole.Admin)
  @Get('no-instructor')
  findCandidatesWithoutInstructor(
    @Param('schooladminId') schooladminId: string,
  ) {
    return this.candidateService.getCandidatesWithoutInstructor(schooladminId);
  }

  @Get('by-school/:schoolId')
  async getCandidatesBySchool(@Param('schoolId') schoolId: string) {
    return this.candidateService.getCandidatesBySchool(schoolId);
  }
}
