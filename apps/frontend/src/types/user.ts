import { UserRoles } from "@/enums";

type CreateUserFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    oib: string;
    phoneNumber: string;
};

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
    oib: string;
    role: UserRoles;
};

export type { CreateUserFormData, User };
