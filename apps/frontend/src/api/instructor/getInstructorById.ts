import { API_ENDPOINTS } from "@/constants";
import api from "../api";

export const getInstructorById = async (id: string) => {
  const response = await api.get(`${API_ENDPOINTS.INSTRUCTOR_CANDIDATE}/${id}`);
  return response.data;
};
