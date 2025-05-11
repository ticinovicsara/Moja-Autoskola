import { useMemo, useState } from "react";
import DashboardLayout from "./DashboardLayuot";
import {
  ProgressCard,
  StatusCard,
  ScheduleCard,
  CandidateInstructorCard,
} from "../Cards";
import {
  useAuth,
  useCandidateNextSession,
  useCandidateProgress,
  useGetInstructor,
} from "@/hooks";
import { CandidatePopup } from "../Popup/CandidatePopup";

export const CandidateDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuth();
  const userId = user?.id || "";

  const {
    progress,
    loading: loadingProgress,
    error: progressError,
  } = useCandidateProgress(userId);

  const { nextSession, loading: loadingNext } = useCandidateNextSession(userId);
  const instructorData = useGetInstructor(userId);

  const instructorInfo = useMemo(() => {
    if (!instructorData || !instructorData.name) {
      return {
        name: "Instruktor nije dostupan",
        phone: "N/A",
      };
    }

    return {
      name: instructorData.name,
      phone: "099-123-456",
    };
  }, [instructorData, userId]);

  const memoizedInstructorCard = useMemo(
    () => (
      <CandidateInstructorCard
        instructor={instructorInfo.name}
        phone={instructorInfo.phone}
      />
    ),
    [instructorInfo]
  );

  const progressMessage = loadingProgress
    ? "Učitavanje napretka..."
    : progressError;

  const scheduleContent = useMemo(() => {
    if (loadingNext) return "Učitavanje...";
    if (!nextSession) return "Nema zakazanih aktivnosti";
    return `Sljedeća aktivnost: ${nextSession.activity}`;
  }, [loadingNext, nextSession]);

  const scheduleTime = useMemo(() => {
    return nextSession
      ? new Date(nextSession.date).toLocaleString("hr-HR")
      : "";
  }, [nextSession]);

  return (
    <>
      <DashboardLayout
        top={
          progressMessage ? (
            <div>{progressMessage}</div>
          ) : (
            <ProgressCard title="Ukupno odrađeno" progress={progress || 0} />
          )
        }
        left={
          <StatusCard
            title="ODABERI TERMIN VOŽNJE"
            color="#F97C7C"
            onClick={() => setShowPopup(true)}
          />
        }
        right={memoizedInstructorCard}
        bottom={<ScheduleCard activity={scheduleContent} time={scheduleTime} />}
      />

      {showPopup && <CandidatePopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
