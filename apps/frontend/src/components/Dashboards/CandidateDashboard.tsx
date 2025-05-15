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
  useCandidateProgressData,
  useGetInstructor,
  useNextSession,
} from "@/hooks";
import { formatSessionTime } from "@/utils/sessionsUtil";
import ChooseSessionMenu from "../ChooseSessionMenu/ChooseSessionMenu";
import { calculateProgress } from "@/utils";
import c from "./dashboard.module.css";

export const CandidateDashboard = () => {
  const { user } = useAuth();
  const userId = user?.id || "";
  const [isChooseSessionMenuOpen, setIsChooseSessionMenuOpen] = useState(false);

  const {
    data,
    loading: loadingProgress,
    error: progressError,
  } = useCandidateProgressData(userId);

  const { activity, startTime } = useNextSession(userId);
  const { instructor } = useGetInstructor(userId);

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

  const progressMessage = useMemo(() => {
    if (loadingProgress) return "Učitavanje napretka...";
    if (progressError)
      return typeof progressError === "string"
        ? progressError
        : progressError instanceof Error
          ? progressError.message
          : String(progressError);
    return "";
  }, [loadingProgress, progressError]);

  const progress = useMemo(() => {
    if (!data) return 0;
    const { passedLessons, passedTests } = data;
    return calculateProgress(passedLessons, passedTests);
  }, [data]);

  const scheduleContent = useMemo(() => {
    switch (activity) {
      case "Theory":
        return "Teorija";
      case "Driving":
        return "Vožnja";
      default:
        return "Nema zakazanih aktivnosti";
    }
  }, [activity]);

  const scheduleTime = useMemo(() => {
    return startTime
      ? formatSessionTime(new Date(startTime).toISOString())
      : undefined;
  }, [startTime]);

  const toggleChooseSessionMenu = () => {
    setIsChooseSessionMenuOpen((prev) => !prev);
  };

  return (
    <div className={`container ${c.dashWrapp}`}>
      <DashboardLayout
        top={
          progressMessage ? (
            <div>{progressMessage}</div>
          ) : (
            <ProgressCard title="Ukupno odrađeno" progress={progress || 0} />
          )
        }
        middle={
          <div className={c.gridWrapp}>
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
    </div>
  );
};
