import { useState } from "react";
import styles from "./instructorCandidateList.module.css";
import { ArrowBack } from "@/components";
import { useAuth } from "@/hooks";
import { useInstructorCandidates } from "@/api";
import CandidateSearch from "@/components/CandidateSearch/CandidateSearch";

const InstructorCandidateListPage = () => {
  const { user } = useAuth();
  const instructorId = user?.id;

  const { candidates, isLoading, error } = useInstructorCandidates(
    instructorId || ""
  );

  const [searchTerm, setSearchTerm] = useState("");

  if (!instructorId) return <p>Učitavanje korisnika...</p>;
  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Došlo je do greške.</p>;

  const filteredCandidates = searchTerm
    ? candidates.filter((candidate) => {
        const fullName =
          `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      })
    : candidates;

  return (
    <div className={styles["container"]}>
      <div className={styles["navigation-container"]}>
        <ArrowBack />
        <h1 className={styles["page-title"]}>LISTA KANDIDATA</h1>
      </div>

      <CandidateSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        candidates={filteredCandidates}
        returnMessage="Nema kandidata koji odgovaraju pretrazi"
      />
    </div>
  );
};

export default InstructorCandidateListPage;
