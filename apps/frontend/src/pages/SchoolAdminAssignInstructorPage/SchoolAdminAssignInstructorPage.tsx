import { useState } from "react";
import styles from "./instructorCandidateList.module.css";
import { ArrowBack } from "@/components";
import { InputFieldWithFilter } from "@/components";
import CandidateList from "@/components/CandidateList/CandidateList";
import { useAuth } from "@/hooks";
import { useInstructorCandidates } from "@/api";

const SchoolAdminAssignInstructorPage = () => {
  const { user } = useAuth();
  const adminId = user?.id;

  const { candidates, isLoading, error } = useInstructorCandidates(
    adminId || ""
  );

  const [searchTerm, setSearchTerm] = useState("");

  if (!adminId) return <p>Učitavanje korisnika...</p>;
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

      <InputFieldWithFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {filteredCandidates.length > 0 ? (
        <CandidateList candidates={filteredCandidates} />
      ) : (
        <p className={styles["message"]}>
          Nema kandidata koji odgovaraju pretrazi.
        </p>
      )}
    </div>
  );
};

export default SchoolAdminAssignInstructorPage;
