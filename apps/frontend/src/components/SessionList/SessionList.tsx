import { FC } from "react";
import styles from "./SessionList.module.css";
import { Session } from "@/types";
import { SessionCard } from "@/components";

interface SessionListProps {
  sessions: Session[];
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
