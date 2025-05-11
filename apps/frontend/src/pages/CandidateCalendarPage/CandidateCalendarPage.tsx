import { ArrowBack, Calendar, SessionList } from "@/components";
import styles from "./CandidateCalendarPage.module.css";
import { Plus } from "@/assets/svgs";
import useCandidateSessions from "@/api/session/useSession";
import { getIdFromToken } from "@/utils/decodeUser";

const CandidateCalendarPage = () => {
    const { sessions } = useCandidateSessions(getIdFromToken() ?? "");

    return (
        <div className={styles.page}>
            <div className={`${styles.calendarHeader} container`}>
                <ArrowBack />
                <h2>KALENDAR</h2>
            </div>
            <Calendar />
            <div className={`${styles.upcomingContainer} container`}>
                <div className={`${styles.upcomingHeader} container`}>
                    <h3>Ovaj tjedan</h3>
                    <img src={Plus} alt="plus" />
                </div>
                {sessions && <SessionList sessions={sessions} />}
            </div>
        </div>
    );
};

export default CandidateCalendarPage;
