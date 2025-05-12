import { API_ENDPOINTS } from "@/constants/endpoints";
import api from "../api";
import { CreateUserFormData } from "@/types";

export const loginService = async (email: string, password: string) => {
  const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
    email: email,
    password: password,
  });

  return response.data;
};

export const registerService = async (user: CreateUserFormData) => {
  const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, user);
  return response.data;
};
