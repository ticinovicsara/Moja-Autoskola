import { useMemo, useState } from "react";
import DashboardLayout from "./DashboardLayuot";
import {
  ProgressCard,
  ArrowCard,
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
import { formatSessionTime } from "@/utils/formatSessionTime";

export const CandidateDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuth();
  const userId = user?.id || "";

  const {
    progress,
    loading: loadingProgress,
    error: progressError,
  } = useCandidateProgress(userId);

  const { activity, startTime } = useCandidateNextSession(userId);
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

  const progressMessage = loadingProgress
    ? "Učitavanje napretka..."
    : progressError;

  let scheduleContent = "Nema zakazanih aktivnosti";

  if (activity) {
    switch (activity) {
      case "Theory":
        scheduleContent = "Teorija";
        break;
      case "Driving":
        scheduleContent = "Vožnja";
        break;
      default:
        scheduleContent = scheduleContent;
    }
  }

  const scheduleTime = useMemo(() => {
    return startTime
      ? formatSessionTime(new Date(startTime).toISOString())
      : undefined;
  }, [startTime]);

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
        middle={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <ArrowCard
                title="ODABERI TERMIN VOŽNJE"
                color="#F97C7C"
                onClick={() => setShowPopup(true)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <CandidateInstructorCard
                instructor={instructorInfo.name}
                phone={instructorInfo.phone}
              />
            </div>
          </div>
        }
        bottom={
          <ScheduleCard activity={scheduleContent} time={scheduleTime ?? ""} />
        }
      />

      {showPopup && <CandidatePopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
