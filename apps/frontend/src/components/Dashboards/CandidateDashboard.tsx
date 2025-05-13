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
  useCandidateProgress,
  useGetInstructor,
  useNextSession,
} from "@/hooks";
import { formatSessionTime } from "@/utils/sessionsUtil";
import ChooseSessionMenu from "../ChooseSessionMenu/ChooseSessionMenu";

export const CandidateDashboard = () => {
  const { user } = useAuth();
  const userId = user?.id || "";
  const [isChooseSessionMenuOpen, setIsChooseSessionMenuOpen] = useState(false);

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
        name: "",
        phone: "Još nemaš instruktora!",
      };
    }

    return {
      name: `${instructor.firstName} ${instructor.lastName}`,
      phone: instructor.phoneNumber,
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

  const toggleChooseSessionMenu = () => {
    setIsChooseSessionMenuOpen((prev) => !prev);
  };

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
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1em",
            }}
          >
            <ArrowCard
              title="ODABERI TERMIN VOŽNJE"
              onClick={toggleChooseSessionMenu}
            />
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
      {isChooseSessionMenuOpen && (
        <ChooseSessionMenu toggleChooseSessionMenu={toggleChooseSessionMenu} />
      )}
    </>
  );
};
