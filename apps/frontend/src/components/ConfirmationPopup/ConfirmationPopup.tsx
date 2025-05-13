import styles from "./confirmation.module.css";
import { Cross } from "@/assets/svgs";

type ConfirmationProps = {
  prompt: string;
  handleConfirm: () => void;
  togglePopup: () => void;
};

export const ConfirmationPopup = ({
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
