import { InstructorSlot as InstructorSlotType } from "@/types";
import { FC } from "react";
import styles from "./InstructorSlot.module.css";
import {
    getDayFromDate,
    getFormattedTime,
    getMonthAbbreviation,
} from "@/utils";

interface InstructorSlotProps {
    slot: InstructorSlotType;
}

const InstructorSlot: FC<InstructorSlotProps> = ({ slot }) => {
    console.log(slot);

    return (
        <div className={styles.slot}>
            <div className={styles.date}>
                <p>{slot.startTime.getDate()}</p>
                <p>{getMonthAbbreviation(slot.startTime.getMonth())}</p>
            </div>
            <div className={styles.sessionInfo}>
                <p>{getDayFromDate(slot.startTime)}</p>
                <p>
                    {getFormattedTime(slot.startTime)} -{" "}
                    {getFormattedTime(slot.endTime)}
                </p>
            </div>
        </div>
    );
};

export default InstructorSlot;
