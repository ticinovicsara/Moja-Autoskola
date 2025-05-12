import CandidateCard from "../CandidateCard/CandidateCard";
import styles from "./candidatesList.module.css";

interface Props {
  candidates: { id: string; firstName: string; lastName: string }[];
}

const CandidateList = ({ candidates }: Props) => {
  return (
    <div className={styles["candidates-list"]}>
      {candidates.map((candidate) => {
        const fullName = `${candidate.firstName} ${candidate.lastName}`;
        return <CandidateCard key={candidate.id} name={fullName} />;
      })}
    </div>
  );
};

export default CandidateList;
