import { getDayFromDate, getFormattedTime, getMonthFromDate } from "@/utils";
import styles from "./Confirmation.module.css";
import { Cross } from "@/assets/svgs";

type ConfirmationProps = {
    timeSlot?: Date;
    lengthInMin?: number;
    prompt: string;
    handleConfirm: () => void;
    togglePopup: () => void;
};

export const ConfirmationPopup = ({
    timeSlot,
    lengthInMin,
    prompt,
    handleConfirm,
    togglePopup,
}: ConfirmationProps) => {
    return (
        <div className={styles.confirmPopupContainer}>
            <div className={`${styles.confirmPopup} container`}>
                <img
                    src={Cross}
                    alt="cross"
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePopup();
                    }}
                />
                {timeSlot && (
                    <p className={styles.timeSlot}>
                        <span>
                            {timeSlot.getDate()}. {getMonthFromDate(timeSlot)}
                            ,{" "}
                        </span>
                        {getDayFromDate(timeSlot)}
                        <br />
                        {getFormattedTime(timeSlot)} -{" "}
                        {getFormattedTime(
                            new Date(timeSlot.getTime() + lengthInMin! * 60000)
                        )}
                        <br />
                        <br />
                    </p>
                )}
                <p>{prompt}</p>
                <div className={styles.options}>
                    <button onClick={handleConfirm}>Da</button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePopup();
                        }}
                    >
                        Ne
                    </button>
                </div>
            </div>
        </div>
    );
};
