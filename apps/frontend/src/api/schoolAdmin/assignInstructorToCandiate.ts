import { API_ENDPOINTS } from "@/constants";
import { postData } from "@/utils";

interface AssignInstructorCandidateDto {
    candidateId: string;
    instructorId: string;
}

export const assignInstructorToCandidate = async (
    candidateId: string,
    instructorId: string
) => {
    return postData<AssignInstructorCandidateDto, any>(
        API_ENDPOINTS.INSTRUCTOR_CANDIDATE.CRUD,
        {
            candidateId,
            instructorId,
        }
    );
};
