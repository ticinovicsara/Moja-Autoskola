import { JwtPayload } from "@/utils/decodeUser";
import { createContext } from "react";

type AuthContextType = {
  user: JwtPayload | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
