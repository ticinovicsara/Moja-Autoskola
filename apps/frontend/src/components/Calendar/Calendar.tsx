import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import styles from "./Calendar.module.css";

const Calendar = () => {
    const formatShortWeekday = (_locale: string | undefined, date: Date) => {
        return ["N", "P", "U", "S", "Č", "P", "S"][date.getDay()];
    };

    return (
        <ReactCalendar
            className={`${styles.calendar} container`}
            formatShortWeekday={formatShortWeekday}
        />
    );
};

export default Calendar;
