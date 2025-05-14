import { FC } from "react";
import styles from "../ChooseSessionMenu/ChooseSessionMenu.module.css";
import { Cross } from "@/assets/svgs";
import CandidateCard from "../CandidateCard/CandidateCard";

const mockCandidates = [
  { id: 1, firstName: "Ana", lastName: "Anić" },
  { id: 2, firstName: "Marko", lastName: "Marković" },
  { id: 3, firstName: "Ivana", lastName: "Ivić" },
];

interface ChooseCandidateMenuProps {
  toggleChooseSessionMenu: () => void;
}

const ChooseInstructorMenu: FC<ChooseCandidateMenuProps> = ({
  toggleChooseSessionMenu,
}) => {
  return (
    <div className={styles.menuContainer}>
      <div className={`${styles.menu} container`}>
        <div className={styles.header}>
          <h2>Popis kandidata</h2>
          <img src={Cross} alt="close" onClick={toggleChooseSessionMenu} />
        </div>

        <div className={styles.slotList}>
          {mockCandidates.length > 0 ? (
            mockCandidates.map((c) => (
              <CandidateCard
                key={c.id}
                firstName={c.firstName}
                lastName={c.lastName}
              />
            ))
          ) : (
            <p>Trenutno nema dostupnih kandidata.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseInstructorMenu;
