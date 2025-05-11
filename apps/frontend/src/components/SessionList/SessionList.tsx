import { FC } from "react";
import styles from "./SessionList.module.css";
import { Session } from "@/types";

interface SessionListProps {
    sessions: Session[];
}

const SessionList: FC<SessionListProps> = ({ sessions }) => {
    return (
        <div className={styles.sessionList}>
            {sessions.map((session) => (
                <div key={session.id} className={styles.session}>
                    <p>{session.startTime.getDate()}</p>
                </div>
            ))}
        </div>
    );
};

export default SessionList;
