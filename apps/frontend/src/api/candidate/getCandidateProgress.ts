import { API_ENDPOINTS } from "@/constants";
import api from "../api";

export const getCandidateProgress = async (candidateId: string) => {
  try {
    const response = await api.get(
      `${API_ENDPOINTS.CANDIDATE.PROGRESS}/${candidateId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null;
  }
};
