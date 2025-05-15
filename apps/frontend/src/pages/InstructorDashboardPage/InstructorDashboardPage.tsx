import { useAuth, useNextSession } from "@/hooks";
import { formatSessionTime } from "@/utils";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";
import c from "../SchoolAdminDashboard/schoolAdmin.module.css";
import styles from "./instructorDash.module.css";
import Arrow from "@/assets/svgs/Arrow2.svg";
import { useState } from "react";
import { AddSlotMenu } from "@/components";
import { ScheduleCard } from "@/components/Cards";

const InstructorDashboard = () => {
  const { user } = useAuth();
  const userId = user?.id || "";
  const navigate = useNavigate();
  const [isAddSlotMenuOpen, setIsAddSlotMenuOpen] = useState(false);

  const { loading, activity, startTime } = useNextSession(userId);

  const scheduleContent = loading
    ? "Učitavanje..."
    : activity || "Nema zakazanih aktivnosti";

  const scheduleTime = startTime
    ? formatSessionTime(new Date(startTime).toISOString())
    : "";

  const toggleAddSlotMenu = () => {
    setIsAddSlotMenuOpen((prev) => !prev);
  };

  return (
    <div className={`${c.adminDashboard} container`}>
      <div className={c.greeting}>
        <p>Pozdrav,</p>
        <h1>{user?.firstName.toUpperCase()}</h1>
      </div>

      <div className={styles.rowCards}>
        <div className={c.assign} onClick={toggleAddSlotMenu}>
          <p>KREIRAJ TERMIN VOŽNJE</p>
          <img src={Arrow} alt="arrow" />
        </div>

        <div
          className={c.approve}
          onClick={() => navigate(routes.INSTRUCTOR_CANDIDATE_LIST)}
        >
          <p>POGLEDAJ LISTU KANDIDATA</p>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>

      <ScheduleCard activity={scheduleContent} time={scheduleTime} />

      {isAddSlotMenuOpen && (
        <AddSlotMenu toggleAddSlotMenu={toggleAddSlotMenu} />
      )}
    </div>
  );
};

export default InstructorDashboard;
