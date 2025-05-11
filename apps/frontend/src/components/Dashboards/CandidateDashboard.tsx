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
} from "@/hooks";
import { CandidatePopup } from "../Popup/CandidatePopup";
import { useMemo, useState } from "react";

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

  const memoizedInstructorCard = useMemo(
    () => <CandidateInstructorCard instructor="Marko Marković" phone="123" />,
    []
  );

  const progressMessage = loadingProgress
    ? "Učitavanje napretka..."
    : progressError;

  const scheduleContent = useMemo(() => {
    if (loadingNext) return "Učitavanje...";
    if (!nextSession) return "Nema zakazanih aktivnosti";
    return `Sljedeća aktivnost: ${nextSession.activity}`;
  }, [loadingNext, nextSession]);

  const scheduleTime = nextSession
    ? new Date(nextSession.date).toLocaleString("hr-HR")
    : "";

  if (!userId) {
    return <div>User not found</div>;
  }
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
