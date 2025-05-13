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
import { usePostDrivingSession } from "@/api";
import { useAuth } from "@/hooks";
import { Arrow } from "@/assets/images";
import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";

interface InstructorSlotProps {
  slot: InstructorSlotType;
}

const InstructorSlot: FC<InstructorSlotProps> = ({ slot }) => {
  const { user } = useAuth();
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const { addDrivingSession } = usePostDrivingSession();

  function toggleConfirmPopup() {
    setIsConfirmPopupOpen((prev) => !prev);
    console.log(isConfirmPopupOpen);
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
    <div className={styles.slot} onClick={toggleConfirmPopup}>
      <div className={styles.date}>
        <p>{slot.startTime.getDate()}</p>
        <p>{getMonthAbbreviation(slot.startTime.getMonth())}</p>
      </div>
      <div className={styles.sessionInfo}>
        <p>{getDayFromDate(slot.startTime)}</p>
        <p>
          {getFormattedTime(slot.startTime)} - {getFormattedTime(slot.endTime)}
        </p>{" "}
      </div>
      <img src={Arrow} alt="arrow" onClick={toggleConfirmPopup} />
      {isConfirmPopupOpen && (
        <ConfirmationPopup
          prompt="Jesi li siguran da želiš ovaj termin?"
          handleConfirm={handleConfirm}
          togglePopup={toggleConfirmPopup}
        />
      )}
    </div>
  );
};

export default InstructorSlot;
