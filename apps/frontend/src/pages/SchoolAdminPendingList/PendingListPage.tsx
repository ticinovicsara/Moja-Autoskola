import { useLocation } from "react-router-dom";
import c from "./pending.module.css";
import { EnrollmentStatus } from "@/enums";
import { useSchoolEnrollments } from "@/api";

export const PendingListPage = () => {
  const location = useLocation();
  const schoolId = location.state.schoolId;

  const { enrollments } = useSchoolEnrollments(
    schoolId,
    EnrollmentStatus.Pending
  );

  return (
    <div className={`${c.pendingList} container`}>
      <p>PendingListPage</p>
      {enrollments.map((e) => e.candidateName)}
    </div>
  );
};
