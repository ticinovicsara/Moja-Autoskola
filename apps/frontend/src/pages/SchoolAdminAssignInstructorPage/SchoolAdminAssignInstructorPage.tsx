import { useState } from "react";
import styles from "../InstructorCandidateListPage/instructorCandidateList.module.css";
import { ArrowBack, Navbar } from "@/components";
import { InputFieldWithFilter } from "@/components";
import CandidateList from "@/components/CandidateList/CandidateList";
import { useAssignInstructor, useAuth } from "@/hooks";
import { User } from "@/types";
import ChooseInstructorMenu from "@/components/ChooseInstructorMenu/ChooseInstructorMenu";

const mockCandidates: User[] = [
  { id: "1", firstName: "Iva", lastName: "Ivić", phone: "0911111111" },
  { id: "2", firstName: "Marko", lastName: "Marić", phone: "0922222222" },
  { id: "3", firstName: "Ana", lastName: "Anić", phone: "0933333333" },
];

const mockInstructors: User[] = [
  { id: "a", firstName: "Petar", lastName: "Petrović", phone: "0944444444" },
  { id: "b", firstName: "Lana", lastName: "Lanić", phone: "0955555555" },
  { id: "c", firstName: "Karlo", lastName: "Karlić", phone: "0966666666" },
];

const SchoolAdminAssignInstructorPage = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<User | null>(null);

  const { assign, isLoading, error, success } = useAssignInstructor();

  if (!user) return <p>Učitavanje korisnika...</p>;

  const filteredCandidates = searchTerm
    ? mockCandidates.filter((candidate) => {
        const fullName =
          `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      })
    : mockCandidates;

  const openInstructorModal = (candidate: User) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleInstructorSelect = async (instructor: User) => {
    if (!selectedCandidate) return;
    await assign(selectedCandidate.id, instructor.id);
    if (!error) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["navigation-container"]}>
        <ArrowBack />
        <h1 className={styles["page-title"]}>LISTA KANDIDATA</h1>
      </div>

      <InputFieldWithFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {filteredCandidates.length > 0 ? (
        <CandidateList
          candidates={filteredCandidates}
          onClick={openInstructorModal}
        />
      ) : (
        <p className={styles.message}>
          Nema kandidata koji odgovaraju pretrazi.
        </p>
      )}

      {isModalOpen && selectedCandidate && (
        <ChooseInstructorMenu
          toggleChooseInstructorMenu={() => setIsModalOpen(false)}
          candidate={selectedCandidate}
          instructors={mockInstructors}
          onSelectInstructor={handleInstructorSelect}
        />
      )}

      {isLoading && <p>Dodjeljivanje u tijeku...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>Instruktor uspješno dodijeljen.</p>
      )}
    </div>
  );
};

export default SchoolAdminAssignInstructorPage;
