import styles from "./candidateCard.module.css";
import { Profile } from "@/assets/svgs";

interface Props {
  name: string;
}

const CandidateCard = ({ name }: Props) => {
  return (
    <div className={styles["candidate-card"]}>
      <img src={Profile} alt={name} className={styles["candidate-avatar"]} />
      <div className={styles["candidate-name"]}>{name}</div>
    </div>
  );
};

export default CandidateCard;
