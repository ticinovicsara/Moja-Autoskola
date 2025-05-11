import DashboardLayout from "./DashboardLayuot";
import { StatusCard, ScheduleCard } from "../Cards";
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
    return startTime ? formatSessionTime(startTime) : "";
  }, [startTime]);

  return (
    <>
      <DashboardLayout
        left={
          <StatusCard
            title="REZERVIRAJ TERMIN VOŽNJE"
            color="#F97C7C"
            onClick={() => setShowPopup(true)}
          />
        }
        right={
          <StatusCard
            title="POGLEDAJ LISTU KANDIDATA"
            color="#B1CF86"
            linkTo={routes.INSTRUCTOR_CANDIDATE_LIST}
          />
        }
        bottom={<ScheduleCard activity={scheduleContent} time={scheduleTime} />}
      />
      {showPopup && <InstructorPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
