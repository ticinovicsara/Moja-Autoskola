import { EnrollmentStatus } from "@/enums";

export type EnrollmentPatchRequest = {
  id: string;
  status: EnrollmentStatus;
};
