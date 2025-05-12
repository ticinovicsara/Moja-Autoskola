import axios from "axios";

export const API_BASE_URL = "http://localhost:3000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const backendError = error.response?.data;

      let message = "Došlo je do greške.";

      if (Array.isArray(backendError?.message)) {
        message = backendError.message.join("\n");
      } else if (typeof backendError?.message === "string") {
        message = backendError.message;
      }

      return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
  }
);

export default api;
