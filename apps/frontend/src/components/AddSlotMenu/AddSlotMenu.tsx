import { FC } from "react";
import styles from "./AddSlot.module.css";
import { Cross } from "@/assets/svgs";
import useInstructorSlot from "@/api/instructor/useInstructorSlot";
import { InstructorSlot } from "@/components";

interface AddSlotMenuProps {
    toggleAddSlotMenu: () => void;
}

const AddSlotMenu: FC<AddSlotMenuProps> = ({ toggleAddSlotMenu }) => {
    const { slots, isLoading, error } = useInstructorSlot();
    return (
        <div className={styles.menuContainer}>
            <div className={`${styles.menu} container`}>
                <div className={styles.header}>
                    <h2>Slobodni termini</h2>
                    <img src={Cross} alt="cross" onClick={toggleAddSlotMenu} />
                </div>
                {isLoading ? (
                    <p>Učitavanje...</p>
                ) : (
                    <div className={styles.slotList}>
                        {slots.length > 0 ? (
                            slots.map((s) => (
                                <InstructorSlot key={s.id} slot={s} />
                            ))
                        ) : (
                            <p>Trenutno nema slobodnih termina.</p>
                        )}
                    </div>
                )}
                {error && <p className="errorMessage">{error.message}</p>}
            </div>
        </div>
    );
};

export default AddSlotMenu;
