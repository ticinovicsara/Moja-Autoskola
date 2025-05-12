import {
    DrivingSessionReq,
    InstructorSlot as InstructorSlotType,
} from "@/types";
import { FC, useState } from "react";
import styles from "./InstructorSlot.module.css";
import {
    getDayFromDate,
    getFormattedTime,
    getMonthAbbreviation,
} from "@/utils";
import { Arrow2, Cross } from "@/assets/svgs";
import { usePostDrivingSession } from "@/api";
import { useAuth } from "@/hooks";

interface InstructorSlotProps {
    slot: InstructorSlotType;
}

const InstructorSlot: FC<InstructorSlotProps> = ({ slot }) => {
    const { user } = useAuth();
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
    const { addDrivingSession } = usePostDrivingSession();

    function toggleConfirmPopup() {
        setIsConfirmPopupOpen((prev) => !prev);
    }

    function handleConfirm() {
        const drivingSessionReq: DrivingSessionReq = {
            candidateId: user?.id ?? "",
            instructorId: slot.instructorId,
            instructorSlotId: slot.id,
        };
        addDrivingSession(drivingSessionReq);
        toggleConfirmPopup();
    }

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
            <img src={Arrow2} alt="arrow" onClick={toggleConfirmPopup} />
            {isConfirmPopupOpen && (
                <div className={`${styles.confirmPopup} container`}>
                    <img src={Cross} alt="cross" onClick={toggleConfirmPopup} />
                    <p>Jesi li siguran da želiš odabrati ovaj termin?</p>
                    <div className={styles.options}>
                        <button onClick={handleConfirm}>Da</button>
                        <button onClick={toggleConfirmPopup}>Ne</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InstructorSlot;
