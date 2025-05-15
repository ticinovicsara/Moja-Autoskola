export enum UserRoles {
    Admin = "Admin",
    SchoolAdmin = "SchoolAdmin",
    Instructor = "Instructor",
    Candidate = "Candidate",
    Guest = "Guest",
}

export type CreateUserFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    oib: string;
    phoneNumber: string;
};

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
    oib: string;
    role: UserRoles;
};
