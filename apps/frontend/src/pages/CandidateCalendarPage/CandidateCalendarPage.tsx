import {
  ArrowBack,
  Calendar,
  ChooseSessionMenu,
  SessionList,
} from "@/components";
import styles from "./CandidateCalendarPage.module.css";
import { Plus } from "@/assets/svgs";
import { getIdFromToken, getUpcomingMonday } from "@/utils";
import { useState } from "react";
import useUserSessions from "@/api/session/useSession";

const CandidateCalendarPage = () => {
  const { sessions, isLoading, error } = useUserSessions(
    getIdFromToken() ?? ""
  );
  const [isChooseSessionMenuOpen, setIsChooseSessionMenuOpen] = useState(false);

  const upcomingSessions = sessions
    ?.filter((session) => {
      const now = new Date();
      const monday = getUpcomingMonday(now);

      return session.startTime >= now && session.startTime <= monday;
    })
    ?.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  const toggleChooseSessionMenu = () => {
    setIsChooseSessionMenuOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.page} container`}>
      {isLoading ? (
        <p>Učitavanje...</p>
      ) : (
        <>
          <div className={`${styles.calendarHeader}`}>
            <ArrowBack />
            <h2>KALENDAR</h2>
          </div>
          <Calendar sessions={sessions} />{" "}
          <div className={`${styles.upcomingContainer} container`}>
            <div className={styles.upcomingHeader}>
              <h3>Nadolazeći termini ovaj tjedan</h3>
              <img src={Plus} alt="plus" onClick={toggleChooseSessionMenu} />
            </div>
            {upcomingSessions.length > 0 ? (
              <SessionList sessions={upcomingSessions} />
            ) : (
              <p>Nemaš nadolazećih termina ovaj tjedan!</p>
            )}
          </div>
        </>
      )}
      {error && (
        <p className="errorMessage">
          <p>Došlo je do pogreške prilikom učitavanja sesija.</p>
        </p>
      )}
      {isChooseSessionMenuOpen && (
        <ChooseSessionMenu toggleChooseSessionMenu={toggleChooseSessionMenu} />
      )}
    </div>
  );
};

export default CandidateCalendarPage;
