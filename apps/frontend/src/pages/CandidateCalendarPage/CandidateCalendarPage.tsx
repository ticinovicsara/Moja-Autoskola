import { ArrowBack, Calendar, SessionList } from "@/components";
import styles from "./CandidateCalendarPage.module.css";
import { Plus } from "@/assets/svgs";
import { useCandidateSessions } from "@/api";
import { getIdFromToken, getUpcomingMonday } from "@/utils";

const CandidateCalendarPage = () => {
    const { sessions, isLoading, error } = useCandidateSessions(
        getIdFromToken() ?? ""
    );
    const upcomingSessions = sessions
        ?.filter((session) => {
            const now = new Date();
            const monday = getUpcomingMonday(now);

            return session.startTime >= now && session.startTime <= monday;
        })
        ?.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

    return (
        <div className={styles.page}>
            {isLoading ? (
                <p>Učitavanje...</p>
            ) : (
                <>
                    <div className={`${styles.calendarHeader} container`}>
                        <ArrowBack />
                        <h2>KALENDAR</h2>
                    </div>
                    <Calendar sessions={sessions} />{" "}
                    <div className={`${styles.upcomingContainer} container`}>
                        <div className={styles.upcomingHeader}>
                            <h3>Nadolazeći termini ovaj tjedan</h3>
                            <img src={Plus} alt="plus" />
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
        </div>
    );
};

export default CandidateCalendarPage;
