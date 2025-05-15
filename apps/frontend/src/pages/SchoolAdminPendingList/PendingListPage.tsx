import { useLocation } from "react-router-dom";
import c from "./pending.module.css";
import { useSchoolEnrollments } from "@/api";
import { ArrowBack } from "@/components";
import { PendingCandidateCard } from "@/components/Cards/PendingCandidateCard/PendingCandidateCard";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";

export const PendingListPage = () => {
    const location = useLocation();
    const schoolId = location.state.schoolId;

    const { enrollments, isLoading } = useSchoolEnrollments(
        schoolId,
        EnrollmentStatus.Pending
    );

    if (isLoading) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div className={`${c.pendingList} container`}>
            <div className={c.titleAndArrow}>
                <ArrowBack /> <h2>ODOBRI ZAHTJEVE</h2>{" "}
            </div>
            {enrollments.length === 0 ? (
                <h4>Nema zahtjeva za upis</h4>
            ) : (
                enrollments.map((e) => (
                    <PendingCandidateCard key={e.requestId} enrollment={e} />
                ))
            )}
        </div>
    );
};
