import { User } from "@/types";
import CandidateCard from "../CandidateCard/CandidateCard";
import styles from "./candidatesList.module.css";

interface Props {
  candidates: User[];
}

const CandidateList = ({ candidates }: Props) => {
  return (
    <div className={styles["candidates-list"]}>
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          firstName={candidate.firstName}
          lastName={candidate.lastName}
        />
      ))}
    </div>
  );
};

export default CandidateList;
