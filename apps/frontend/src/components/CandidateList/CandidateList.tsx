import { User } from "@/types";
import CandidateCard from "../CandidateCard/CandidateCard";
import styles from "./candidatesList.module.css";

interface Props {
  candidates: User[];
  onClick?: (candidate: User) => void;
}

const CandidateList = ({ candidates, onClick }: Props) => {
  return (
    <div className={styles["candidates-list"]}>
      {candidates.map((candidate) => (
        <div key={candidate.id} onClick={() => onClick && onClick(candidate)}>
          <CandidateCard
            firstName={candidate.firstName}
            lastName={candidate.lastName}
          />
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
