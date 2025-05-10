import { API_ENDPOINTS } from "@/constants/endpoints";
import api from "../api";

export const loginService = async (email: string, password: string) => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    console.log("Login error: ", error);
    throw error;
  }
};
