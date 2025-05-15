import { UserRoles } from "./user";

export type EnrollmentRequest = {
    requestId: string;
    candidateName: string;
    role: UserRoles;
    schoolName: string;
    status: EnrollmentStatus;
};

export type EnrollmentPatchRequest = {
    id: string;
    status: EnrollmentStatus;
};

export type EnrollmentPostRequest = {
    candidateId: string;
    schoolId: string;
};

export enum EnrollmentStatus {
    Approved = "Approved",
    Pending = "Pending",
    Denied = "Denied",
    WaitingForPayment = "WaitingForPayment",
}
