import { FC, useState } from "react";
import styles from "./AddSlot.module.css";
import { Cross } from "@/assets/svgs";
import { InputField } from "@/components";
import usePostInstructorSlot from "@/api/instructor/usePostInstructorSlot";
import { AddInstructorSlotReq } from "@/types";
import { useAuth } from "@/hooks";

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
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
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

    return (
        <div className={styles.menuContainer}>
            <div className={`${styles.menu} container`}>
                <div className={styles.header}>
                    <h2>Kreiraj termin</h2>
                    <img src={Cross} alt="cross" onClick={toggleAddSlotMenu} />
                </div>{" "}
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="authBtn">
                        KREIRAJ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddSlotMenu;
