import { EnrollmentStatus } from "./EnrollmentStatus";
import { UserRoles } from "./user";

export type EnrollmentRequest = {
  requestId: string;
  candidateName: string;
  role: UserRoles;
  schoolName: string;
  status: EnrollmentStatus;
};
