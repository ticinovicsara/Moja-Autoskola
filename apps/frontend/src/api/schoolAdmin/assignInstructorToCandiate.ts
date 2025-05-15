import { postData } from "@/utils";

interface AssignInstructorCandidateDto {
  candidateId: string;
  instructorId: string;
}

export const assignInstructorToCandidate = async (
  candidateId: string,
  instructorId: string
) => {
  return postData<AssignInstructorCandidateDto, any>("/instructor-candidate", {
    candidateId,
    instructorId,
  });
};
