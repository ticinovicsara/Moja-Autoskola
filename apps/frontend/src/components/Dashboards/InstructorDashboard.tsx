import DashboardLayout from "./DashboardLayuot";
import { ArrowCard, ScheduleCard } from "../Cards";
import { routes } from "@/constants";
import { useMemo, useState } from "react";
import { InstructorPopup } from "../Popup/InstructorPopup";
import { useAuth, useInstructorNextSession } from "@/hooks";
import { formatSessionTime } from "@/utils";
import styles from "../Cards/ArrowCard/arrowCard.module.css";

export const InstructorDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuth();
  const userId = user?.id || "";

  const { loading, activity, startTime } = useInstructorNextSession(userId);

  const scheduleContent = useMemo(() => {
    if (loading) return "Učitavanje...";
    if (!activity) return "Nema zakazanih aktivnosti";
    return activity;
  }, [loading, activity]);

  const scheduleTime = useMemo(() => {
    if (!startTime) return "";

    const startTimeDate =
      startTime instanceof Date ? startTime : new Date(startTime);

    return formatSessionTime(startTimeDate.toISOString());
  }, [startTime]);

  return (
    <>
      <DashboardLayout
        middle={
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1em",
            }}
          >
            <ArrowCard
              title="REZERVIRAJ TERMIN VOŽNJE"
              onClick={() => setShowPopup(true)}
              className={`${styles["arrow-card"]} ${styles["card-red"]}`}
            />
            <ArrowCard
              title="POGLEDAJ LISTU KANDIDATA"
              linkTo={routes.INSTRUCTOR_CANDIDATE_LIST}
              className={`${styles["arrow-card"]} ${styles["card-green"]}`}
            />
          </div>
        }
        bottom={<ScheduleCard activity={scheduleContent} time={scheduleTime} />}
      />
      {showPopup && <InstructorPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
