import { EnrollmentStatus, UserRoles } from "@/enums";

export type EnrollmentRequest = {
  requestId: string;
  candidateName: string;
  role: UserRoles;
  schoolName: string;
  status: EnrollmentStatus;
};
