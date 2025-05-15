import { useMemo, useState } from "react";
import {
  useAuth,
  useCandidateProgressData,
  useGetInstructor,
  useNextSession,
} from "@/hooks";
import { formatSessionTime } from "@/utils/sessionsUtil";
import { calculateProgress } from "@/utils";
import c from "../SchoolAdminDashboard/schoolAdmin.module.css";
import styles from "./candidateDashboard.module.css";
import { ProgressCard, ScheduleCard } from "@/components/Cards";
import { ChooseSessionMenu } from "@/components";
import Arrow from "@/assets/svgs/Arrow2.svg";

const CandidateDashboard = () => {
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
    <div className={`${c.adminDashboard} container`}>
      <div className={c.greeting}>
        <p>Pozdrav,</p>
        <h1>{user?.firstName.toUpperCase()}</h1>
      </div>

      <div className={styles.allCards}>
        {progressMessage ? (
          <div>{progressMessage}</div>
        ) : (
          <ProgressCard title="Ukupno odrađeno" progress={progress || 0} />
        )}

        <div className={styles.rowCards}>
          <div className={c.assign} onClick={toggleChooseSessionMenu}>
            <p>ODABERI TERMIN VOŽNJE</p>
            <img src={Arrow} alt="arrow" />
          </div>

          <div className={styles.candidateInstructorCard}>
            <div className={styles.contentTitle}>Tvoj Instruktor</div>
            <div className={styles.cardContent}>
              <div className={styles.instructorName}>{instructorInfo.name}</div>
              <span className={styles.instructorPhone}>
                {instructorInfo.phone}
              </span>
            </div>
          </div>
        </div>

        <ScheduleCard activity={scheduleContent} time={scheduleTime ?? ""} />
      </div>
      {isChooseSessionMenuOpen && (
        <ChooseSessionMenu toggleChooseSessionMenu={toggleChooseSessionMenu} />
      )}
    </div>
  );
};

export default CandidateDashboard;
