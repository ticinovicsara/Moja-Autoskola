import { FC } from "react";
import styles from "./AddSlot.module.css";
import { Cross } from "@/assets/svgs";
import { InstructorSlot } from "@/components";
import usePostInstructorSlot from "@/api/instructor/usePostInstructorSlot";

interface AddSlotMenuProps {
    toggleAddSlotMenu: () => void;
}

const AddSlotMenu: FC<AddSlotMenuProps> = ({ toggleAddSlotMenu }) => {
    const { addInstructorSlot, isPending } = usePostInstructorSlot();

    return (
        <div className={styles.menuContainer}>
            <div className={`${styles.menu} container`}>
                <form></form>
            </div>
        </div>
    );
};

export default AddSlotMenu;
