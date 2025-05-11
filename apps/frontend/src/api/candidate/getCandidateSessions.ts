import { API_ENDPOINTS } from "@/constants";
import api from "../api";

export const getCandidateSessions = async (candidateId: string) => {
  try {
    const response = await api.get(
      `${API_ENDPOINTS.SESSION.CANDIDATE}/${candidateId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sessions for candidate:", error);
    return null;
  }
};
