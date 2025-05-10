import { API_ENDPOINTS } from "@/constants/endpoints";
import api from "../api";
import { CreateUserFormData } from "@/types";

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

export const registerService = async (user: CreateUserFormData) => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, user);
    return response.data;
  } catch (error) {
    console.log("Register error: ", error);
    throw error;
  }
};
