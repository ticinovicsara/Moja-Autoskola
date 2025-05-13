import { useMemo } from "react";
import DashboardLayout from "./DashboardLayuot";
import {
  ProgressCard,
  ArrowCard,
  ScheduleCard,
  CandidateInstructorCard,
} from "../Cards";
import {
  useAuth,
  useCandidateProgress,
  useGetInstructor,
  useNextSession,
} from "@/hooks";
import { formatSessionTime } from "@/utils/sessionsUtil";

export const CandidateDashboard = () => {
  const { user } = useAuth();
  const userId = user?.id || "";

  const {
    progress,
    loading: loadingProgress,
    error: progressError,
  } = useCandidateProgress(userId);

  const { activity, startTime } = useNextSession(userId);
  const instructor = useGetInstructor(userId);

  const instructorInfo = useMemo(() => {
    if (!instructor || !instructor.firstName) {
      return {
        name: "Instruktor nije dostupan",
        phone: "N/A",
      };
    }

    return {
      name: `${instructor.firstName} ${instructor.lastName}`,
      phone: instructor.phone,
    };
  }, [instructor, userId]);

  const progressMessage = loadingProgress
    ? "Učitavanje napretka..."
    : progressError
      ? typeof progressError === "string"
        ? progressError
        : progressError instanceof Error
          ? progressError.message
          : String(progressError)
      : "";

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
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1em",
          }}
        >
          <ArrowCard title="ODABERI TERMIN VOŽNJE" />
          <CandidateInstructorCard
            instructor={instructorInfo.name}
            phone={instructorInfo.phone ?? ""}
          />
        </div>
      }
      bottom={
        <ScheduleCard activity={scheduleContent} time={scheduleTime ?? ""} />
      }
    />
  );
};
