import { getUserFromToken, JwtPayload } from "@/utils/jwtUtils";
import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<JwtPayload | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const userData = getUserFromToken(token);
            if (userData) setUser(userData);
            else logout();
        }
        setIsLoading(false);
    }, []);

    const login = (token: string) => {
        localStorage.setItem("token", token);
        const userData = getUserFromToken(token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
