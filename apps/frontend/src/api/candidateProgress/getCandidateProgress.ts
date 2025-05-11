import { API_ENDPOINTS } from "@/constants";
import api from "../api";

export const getCandidateProgress = async (candidateId: string) => {
  console.log(candidateId);
  const token = localStorage.getItem("token");

  console.log("TOKEN: ", token);

  try {
    const response = await api.get(
      `${API_ENDPOINTS.USER.PROGRESS}/${candidateId}`
    );
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching progress:", error);
    return null;
  }
};
