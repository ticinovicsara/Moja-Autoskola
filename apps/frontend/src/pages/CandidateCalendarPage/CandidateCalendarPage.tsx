import { ArrowBack, Calendar } from "@/components";
import styles from "./CandidateCalendarPage.module.css";

const CandidateCalendarPage = () => {
    return (
        <div className={styles.page}>
            <div className={`${styles.header} container`}>
                <ArrowBack />
                <h2>KALENDAR</h2>
            </div>
            <Calendar />
        </div>
    );
};

export default CandidateCalendarPage;
