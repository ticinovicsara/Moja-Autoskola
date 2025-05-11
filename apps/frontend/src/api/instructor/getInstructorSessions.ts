import { API_ENDPOINTS } from "@/constants";
import api from "../api";

export const getInstructorSessions = async (instructorId: string) => {
  try {
    const response = await api.get(
      `${API_ENDPOINTS.SESSION.INSTRUCTOR}/${instructorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sessions for instructor:", error);
    return null;
  }
};
