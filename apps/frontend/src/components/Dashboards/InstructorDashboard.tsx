import DashboardLayout from "./DashboardLayuot";
import { ArrowCard, ScheduleCard } from "../Cards";
import { routes } from "@/constants";
import { useMemo, useState } from "react";
import { InstructorPopup } from "../Popup/InstructorPopup";
import { useAuth, useInstructorNextSession } from "@/hooks";
import { formatSessionTime } from "@/utils/formatSessionTime";

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
              color="#F97C7C"
              onClick={() => setShowPopup(true)}
            />
            <ArrowCard
              title="POGLEDAJ LISTU KANDIDATA"
              color="#B1CF86"
              linkTo={routes.INSTRUCTOR_CANDIDATE_LIST}
            />
          </div>
        }
        bottom={<ScheduleCard activity={scheduleContent} time={scheduleTime} />}
      />
      {showPopup && <InstructorPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
