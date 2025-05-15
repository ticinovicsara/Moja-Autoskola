import { FC, useState } from "react";
import styles from "./AddSlot.module.css";
import { Cross } from "@/assets/svgs";
import { ConfirmationPopup, InputField } from "@/components";
import usePostInstructorSlot from "@/api/instructor/usePostInstructorSlot";
import { AddInstructorSlotReq } from "@/types";
import { useAuth } from "@/hooks";
import { getFormattedTime } from "@/utils";

interface AddSlotMenuProps {
  toggleAddSlotMenu: () => void;
}

const AddSlotMenu: FC<AddSlotMenuProps> = ({ toggleAddSlotMenu }) => {
  const { user } = useAuth();
  const { addInstructorSlot } = usePostInstructorSlot();
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  function toggleConfirmPopup() {
    setIsConfirmPopupOpen((prev) => !prev);
  }

  function handleSubmit() {
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 45);
    const newSlot: AddInstructorSlotReq = {
      instructorId: user?.id ?? "",
      startTime,
      endTime,
    };
    addInstructorSlot(newSlot);
    toggleConfirmPopup();
  }

  function setDate(dateString: string) {
    const newDate = new Date(dateString);
    const updatedDate = new Date(startTime);
    updatedDate.setFullYear(newDate.getFullYear());
    updatedDate.setMonth(newDate.getMonth());
    updatedDate.setDate(newDate.getDate());
    setStartTime(updatedDate);
  }

  function setTime(timeString: string) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const updatedTime = new Date(startTime);
    updatedTime.setHours(hours);
    updatedTime.setMinutes(minutes);
    setStartTime(updatedTime);
  }

  return (
    <div className={styles.menuContainer}>
      <div className={`${styles.menu} container`}>
        <div className={styles.header}>
          <h2>Kreiraj termin</h2>
          <img src={Cross} alt="cross" onClick={toggleAddSlotMenu} />
        </div>{" "}
        <div className={styles.newSlotForm}>
          <div>
            <InputField
              type="date"
              value={startTime.toISOString().split("T")[0]}
              onChange={setDate}
              placeholder="Odaberi datum"
            />
            <InputField
              type="time"
              value={getFormattedTime(startTime)}
              onChange={setTime}
              placeholder="Vrijeme termina"
            />
          </div>
          <button className="authBtn" onClick={toggleConfirmPopup}>
            KREIRAJ
          </button>
        </div>{" "}
        {isConfirmPopupOpen && (
          <ConfirmationPopup
            handleConfirm={handleSubmit}
            togglePopup={toggleConfirmPopup}
            prompt="Jesi li siguran da želiš kreirati ovaj termin?"
            timeSlot={startTime}
            lengthInMin={45}
          />
        )}
      </div>
    </div>
  );
};

export default AddSlotMenu;
