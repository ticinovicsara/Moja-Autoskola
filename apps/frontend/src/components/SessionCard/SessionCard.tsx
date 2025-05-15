import { InstructorSlot, Session } from "@/types";
import { FC } from "react";
import styles from "./SessionCard.module.css";
import {
    getFormattedTime,
    getMonthAbbreviation,
    getSessionFormat,
    getSessionType,
} from "@/utils";

interface SessionCardProps {
    session: Session | InstructorSlot;
}

const SessionCard: FC<SessionCardProps> = ({ session }) => {
    function getSessionTypeClass() {
        if (!("type" in session)) {
            return styles.instructorSlot;
        }

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
                    {"format" in session
                        ? getSessionFormat(session.format)
                        : "Slobodan termin"}
                    {"type" in session && (
                        <>
                            {", "}
                            <span>{getSessionType(session.type)}</span>
                        </>
                    )}
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
