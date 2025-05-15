import { FC } from "react";
import styles from "./SessionList.module.css";
import { InstructorSlot, Session } from "@/types";
import { SessionCard } from "@/components";

interface SessionListProps {
    sessions: (Session | InstructorSlot)[];
}

const SessionList: FC<SessionListProps> = ({ sessions }) => {
    return (
        <div className={styles.sessionList}>
            {sessions.map((session) => (
                <SessionCard key={session.id} session={session} />
            ))}
        </div>
    );
};

export default SessionList;
