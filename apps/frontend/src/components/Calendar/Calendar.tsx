import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

const markedDates = [
    { date: new Date(2025, 4, 15), type: "FirstAid" },
    { date: new Date(2025, 4, 16), type: "FirstAid" },
    { date: new Date(2025, 4, 20), type: "Driving" },
    { date: new Date(2025, 4, 25), type: "Theory" },
];

const Calendar = () => {
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
        return markedDates.find(
            (markedDate) =>
                markedDate.date.getDate() === date.getDate() &&
                markedDate.date.getMonth() === date.getMonth() &&
                markedDate.date.getFullYear() === date.getFullYear()
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
            classes.push(`markedType-${markedDate.type}`);
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
