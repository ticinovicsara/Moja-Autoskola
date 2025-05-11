import { Session } from "@/types";
import { FC } from "react";
import styles from "./SessionCard.module.css";
import {
    getFormattedTime,
    getMonthAbbreviation,
    getSessionFormat,
    getSessionType,
} from "@/utils";

interface SessionCardProps {
    session: Session;
}

const SessionCard: FC<SessionCardProps> = ({ session }) => {
    function getSessionTypeClass() {
        switch (session.type) {
            case "Theory":
                return styles.theory;
            case "FirstAid":
                return styles.firstAid;
            case "Driving":
                return styles.driving;
            default:
                return "";
        }
    }

    return (
        <div className={styles.session}>
            <div className={`${styles.date} ${getSessionTypeClass()}`}>
                <p>{session.startTime.getDate()}</p>
                <p>{getMonthAbbreviation(session.startTime.getMonth())}</p>
            </div>
            <div className={styles.sessionInfo}>
                <p>
                    {getSessionFormat(session.format)},{" "}
                    <span>{getSessionType(session.type)}</span>
                </p>
                <p>
                    {getFormattedTime(session.startTime)} -{" "}
                    {getFormattedTime(session.endTime)}
                </p>
            </div>
        </div>
    );
};

export default SessionCard;
