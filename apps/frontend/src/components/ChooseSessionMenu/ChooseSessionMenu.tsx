import { FC } from "react";
import styles from "./ChooseSessionMenu.module.css";
import { Cross } from "@/assets/svgs";

interface ChooseSessionMenuProps {
    toggleChooseSessionMenu: () => void;
}

const ChooseSessionMenu: FC<ChooseSessionMenuProps> = ({
    toggleChooseSessionMenu,
}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <h2>Slobodni termini</h2>
                <img
                    src={Cross}
                    alt="cross"
                    onClick={toggleChooseSessionMenu}
                />
            </div>
        </div>
    );
};

export default ChooseSessionMenu;
