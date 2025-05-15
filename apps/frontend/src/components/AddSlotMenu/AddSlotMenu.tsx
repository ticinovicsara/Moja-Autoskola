import { FC, useState } from "react";
import styles from "./AddSlot.module.css";
import { Cross } from "@/assets/svgs";
import { InputField } from "@/components";
import usePostInstructorSlot from "@/api/instructor/usePostInstructorSlot";
import { AddInstructorSlotReq } from "@/types";
import { useAuth } from "@/hooks";
import { getDayFromDate, getMonthFromDate } from "@/utils";

interface AddSlotMenuProps {
    toggleAddSlotMenu: () => void;
}

type SlotForm = {
    date: Date;
    time: string;
};

const AddSlotMenu: FC<AddSlotMenuProps> = ({ toggleAddSlotMenu }) => {
    const { user } = useAuth();
    const { addInstructorSlot } = usePostInstructorSlot();
    const [formData, setFormData] = useState<SlotForm>({
        date: new Date(),
        time: "12:00",
    });
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

    function toggleConfirmPopup() {
        setIsConfirmPopupOpen((prev) => !prev);
    }

    function handleSubmit() {
        const startTime = new Date(formData.date);
        const [hours, minutes] = formData.time.split(":").map(Number);
        startTime.setHours(hours, minutes, 0, 0);
        const endTime = new Date(startTime);
        endTime.setHours(endTime.getHours());
        endTime.setMinutes(endTime.getMinutes() + 45);
        const newSlot: AddInstructorSlotReq = {
            instructorId: user?.id ?? "",
            startTime,
            endTime,
        };
        addInstructorSlot(newSlot);
        toggleConfirmPopup();
    }

    function setDate(date: string) {
        const parsedDate = new Date(date);
        setFormData((prev) => ({
            ...prev,
            date: parsedDate,
        }));
    }

    function setTime(time: string) {
        setFormData((prev) => ({
            ...prev,
            time,
        }));
    }

    function getEndTimeString(time: string): string {
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes + 45, 0, 0);
        const endHours = date.getHours().toString().padStart(2, "0");
        const endMinutes = date.getMinutes().toString().padStart(2, "0");
        return `${endHours}:${endMinutes}`;
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
                            value={formData.date.toISOString().split("T")[0]}
                            onChange={setDate}
                            placeholder="Odaberi datum"
                        />
                        <InputField
                            type="time"
                            value={formData.time}
                            onChange={setTime}
                            placeholder="Vrijeme termina"
                        />
                    </div>
                    <button className="authBtn" onClick={toggleConfirmPopup}>
                        KREIRAJ
                    </button>
                </div>
                {isConfirmPopupOpen && (
                    <div className={styles.confirmPopupContainer}>
                        <div className={`${styles.confirmPopup} container`}>
                            <img
                                src={Cross}
                                alt="cross"
                                onClick={toggleConfirmPopup}
                            />
                            <p>
                                <span>
                                    {formData.date.getDate()}.{" "}
                                    {getMonthFromDate(formData.date)},{" "}
                                </span>
                                {getDayFromDate(formData.date)}
                                <br />
                                {formData.time} -{" "}
                                {getEndTimeString(formData.time)}
                                <br />
                                <br />
                            </p>
                            <p>
                                Jesi li siguran da želiš kreirati ovaj termin?
                            </p>
                            <div className={styles.options}>
                                <button onClick={handleSubmit}>Da</button>
                                <button onClick={toggleConfirmPopup}>Ne</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddSlotMenu;
