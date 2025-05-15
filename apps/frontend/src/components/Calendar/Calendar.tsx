import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";
import { FC } from "react";
import { InstructorSlot, Session } from "@/types";

interface CalendarProps {
    sessions: (Session | InstructorSlot)[];
}

const Calendar: FC<CalendarProps> = ({ sessions }) => {
    const formatShortWeekday = (_locale: string | undefined, date: Date) => {
        return ["N", "P", "U", "S", "Č", "P", "S"][date.getDay()];
    };

    const formatMonthYear = (_locale: string | undefined, date: Date) => {
        const months = [
            "Siječanj",
            "Veljača",
            "Ožujak",
            "Travanj",
            "Svibanj",
            "Lipanj",
            "Srpanj",
            "Kolovoz",
            "Rujan",
            "Listopad",
            "Studeni",
            "Prosinac",
        ];

        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    const isMarkedDate = (date: Date) => {
        return sessions.find(
            (session) =>
                session.startTime.getDate() === date.getDate() &&
                session.startTime.getMonth() === date.getMonth() &&
                session.startTime.getFullYear() === date.getFullYear()
        );
    };

    const tileClassName = ({ date, view }: { date: Date; view: string }) => {
        if (view !== "month") return null;

        const classes = [];

        if (date.getDay() === 0) {
            classes.push(styles.sundayTile);
        }

        const markedDate = isMarkedDate(date);
        if (markedDate) {
            classes.push("markedDateTile");

            if ("type" in markedDate)
                classes.push(`markedType-${markedDate.type}`);
            else classes.push(`markedType-instructorSlot`);
        }

        return classes.length ? classes.join(" ") : null;
    };

    return (
        <ReactCalendar
            className={`${styles.calendar} container`}
            formatShortWeekday={formatShortWeekday}
            formatMonthYear={formatMonthYear}
            showNeighboringMonth={false}
            tileClassName={tileClassName}
            tileDisabled={() => false}
            next2Label={null}
            prev2Label={null}
        />
    );
};

export default Calendar;
