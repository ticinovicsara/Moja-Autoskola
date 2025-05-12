import CandidateCard from "../CandidateCard/CandidateCard";
import styles from "./candidatesList.module.css";

interface Props {
  candidates: { id: number; name: string }[];
}

const CandidateList = ({ candidates }: Props) => {
  return (
    <div className={styles["candidates-list"]}>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} name={candidate.name} />
      ))}
    </div>
  );
};

export default CandidateList;
