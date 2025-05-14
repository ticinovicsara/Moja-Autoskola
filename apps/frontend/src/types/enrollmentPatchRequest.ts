import { EnrollmentStatus } from "./EnrollmentStatus";

export type EnrollmentPatchRequest = {
  id: string;
  status: EnrollmentStatus;
};
