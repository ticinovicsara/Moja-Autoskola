import { UserRoles } from "@/enums";
import { jwtDecode } from "jwt-decode";

export type JwtPayload = {
    id: string;
    email: string;
    role: UserRoles;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    oib: string;
    exp: number;
};

export const getUserFromToken = (token: string): JwtPayload | null => {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        const now = Date.now() / 1000;

        if (decoded.exp && decoded.exp < now) {
            return null;
        }

        return decoded;
    } catch (error) {
        return null;
    }
};

export const getIdFromToken = (): string | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = getUserFromToken(token);
    if (!decoded) return null;

    return decoded.id;
};
