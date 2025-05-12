import { useState } from "react";
import styles from "./instructorCandidateList.module.css";
import { ArrowBack } from "@/components";
import { InputFieldWithFilter } from "@/components";
import CandidateList from "@/components/CandidateList/CandidateList";
import { useAuth } from "@/hooks";
import { useInstructorCandidates } from "@/api";

const InstructorCandidateListPage = () => {
  const { user } = useAuth();
  if (!user?.id) return <p>Učitavanje korisnika...</p>;

  const instructorId = user.id;

  const { candidates, isLoading, error } =
    useInstructorCandidates(instructorId);

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Došlo je do greške.</p>;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["navigation-container"]}>
        <ArrowBack />
        <h1 className={styles["page-title"]}>LISTA KANDIDATA</h1>
      </div>

      <InputFieldWithFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className={styles["candidates-list"]}>
        <CandidateList candidates={filteredCandidates} />
      </div>
    </div>
  );
};

export default InstructorCandidateListPage;
