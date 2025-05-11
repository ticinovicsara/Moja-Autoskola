import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const formatShortWeekday = (_locale: string | undefined, date: Date) => {
    return ["N", "P", "U", "S", "Č", "P", "S"][date.getDay()];
  };

  const formatMonthYear = (_locale: string | undefined, date: Date) => {
    const croatianMonths = [
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

    return `${croatianMonths[date.getMonth()]} ${date.getFullYear()}`;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return null;

    if (date.getDay() === 0) {
      return styles.sundayTile;
    }

    return null;
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
