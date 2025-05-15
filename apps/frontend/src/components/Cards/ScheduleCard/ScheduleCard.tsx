import React, { useMemo } from "react";
import CardComponent from "../CardComponent/CardComponent";
import { routes } from "@/constants";
import { SessionType, UserRoles } from "@/types";
import { useAuth } from "@/hooks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "./ScheduleCard.module.css";
import { Arrow2 } from "@/assets/svgs";

interface ScheduleCardProps {
    activity: string;
    time: string;
    onClick?: () => void;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
    activity,
    time,
}) => {
    const { user } = useAuth();

    const sessionTypeTranslations: Record<SessionType, string> = {
        Theory: "Teorija",
        FirstAid: "Prva pomoć",
        Driving: "Vožnja",
    };

    const calendarLink = useMemo(() => {
        if (!user) return "#";

        if (user.role === UserRoles.Candidate) return routes.CANDIDATE_CALENDAR;
        if (user.role === UserRoles.Instructor)
            return routes.INSTRUCTOR_CALENDAR;

        console.warn("Nepoznata uloga:", user.role);
        return "#";
    }, [user]);

    if (!user) return null;

    return (
        <CardComponent
            linkTo={calendarLink}
            className={styles["schedule-card"]}
        >
            <div className={styles["schedule-content"]}>
                <div className={styles["schedule-title"]}>
                    <div>Sljedeće na redu u kalendaru</div>
                    <img src={Arrow2} />
                </div>
                <div className={styles["schedule-body"]}>
                    <div className={styles["schedule-activity"]}>
                        {sessionTypeTranslations[activity as SessionType] ??
                            activity}
                    </div>

                    {time && (
                        <div className={styles["schedule-time"]}>
                            <CalendarMonthIcon
                                className={styles["schedule-icon"]}
                            />
                            <span>{time}</span>
                        </div>
                    )}
                </div>
            </div>
        </CardComponent>
    );
};
