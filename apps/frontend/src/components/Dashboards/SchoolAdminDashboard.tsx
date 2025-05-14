import DashboardLayout from "./DashboardLayuot";
import { ArrowCard, ProgressCard } from "../Cards";
import { routes } from "@/constants";
import styles from "../Cards/ArrowCard/arrowCard.module.css";
import { useAuth } from "@/hooks";
import { useSchoolCandidates } from "@/api";

export const SchoolAdminDashboard = () => {
  const { user } = useAuth();
  const adminId = user?.id || "";

  const { candidateCount, isLoading } = useSchoolCandidates(adminId);

  if (isLoading) {
    return <div>Učitavanje</div>;
  }

  return (
    <DashboardLayout
      top={
        <ProgressCard
          title="Broj kandidata"
          progress={candidateCount}
          total={50}
        />
      }
      middle={
        <ArrowCard
          title="DODIJELI INSTRUKTORA KANDIDATU"
          className={`${styles["arrow-card"]} ${styles["card-red"]}`}
        />
      }
      bottom={
        <ArrowCard
          title="ODOBRI ZAHTJEVE ZA UPIS"
          linkTo={routes.INSTRUCTOR_CANDIDATE_LIST}
          className={`${styles["arrow-card"]} ${styles["card-green"]}`}
        />
      }
    />
  );
};
