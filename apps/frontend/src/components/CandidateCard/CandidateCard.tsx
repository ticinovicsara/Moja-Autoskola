import styles from "./CandidateCard.module.css";
import { Profile } from "@/assets/svgs";

interface Props {
    firstName: string;
    lastName: string;
}

const CandidateCard = ({ firstName, lastName }: Props) => {
    const fullName = `${firstName} ${lastName}`;
    return (
        <div className={styles["candidate-card"]}>
            <img
                src={Profile}
                alt={fullName}
                className={styles["candidate-avatar"]}
            />

            <div className={styles["candidate-name"]}>{fullName}</div>
        </div>
    );
};

export default CandidateCard;
