import { UserRoles } from "./user";

export type JwtPayload = {
    id: string;
    email: string;
    role: UserRoles;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    oib: string;
    phoneNumber: string;
    exp: number;
};
