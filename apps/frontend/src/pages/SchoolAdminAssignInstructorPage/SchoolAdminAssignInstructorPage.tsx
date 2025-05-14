import { useState } from "react";
import styles from "../InstructorCandidateListPage/instructorCandidateList.module.css";
import s from "./schoolAdminList.module.css";
import { ArrowBack, ConfirmationPopup } from "@/components";
import { InputFieldWithFilter } from "@/components";
import CandidateList from "@/components/CandidateList/CandidateList";
import { useAssignInstructor, useAuth } from "@/hooks";
import { User, UserRoles } from "@/types";
import ChooseInstructorMenu from "@/components/ChooseInstructorMenu/ChooseInstructorMenu";

const mockCandidates: User[] = [
  {
    id: "1",
    firstName: "Iva",
    lastName: "Ivić",
    phoneNumber: "0911111111",
    email: "iva@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "1234567890123",
    role: UserRoles.Candidate,
  },
  {
    id: "2",
    firstName: "Marko",
    lastName: "Marić",
    phoneNumber: "0922222222",
    email: "marko@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "9876543210987",
    role: UserRoles.Candidate,
  },
  {
    id: "3",
    firstName: "Ana",
    lastName: "Anić",
    phoneNumber: "0933333333",
    email: "ana@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "5678901234567",
    role: UserRoles.Candidate,
  },
];

const mockInstructors: User[] = [
  {
    id: "a",
    firstName: "Petar",
    lastName: "Petrović",
    phoneNumber: "0944444444",
    email: "petar@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "5555555555555",
    role: UserRoles.Instructor,
  },
  {
    id: "b",
    firstName: "Lana",
    lastName: "Lanić",
    phoneNumber: "0955555555",
    email: "lana@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "6666666666666",
    role: UserRoles.Instructor,
  },
  {
    id: "c",
    firstName: "Karlo",
    lastName: "Karlić",
    phoneNumber: "0966666666",
    email: "karlo@example.com",
    dateOfBirth: new Date("1990-01-01"),
    oib: "7777777777777",
    role: UserRoles.Instructor,
  },
];

const SchoolAdminAssignInstructorPage = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<User | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<User | null>(
    null
  );

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

  const handleInstructorSelect = (instructor: User) => {
    setSelectedInstructor(instructor);
    setIsPopupOpen(true);
  };

  const handleConfirmAssignment = async () => {
    if (!selectedCandidate || !selectedInstructor) return;
    await assign(selectedCandidate.id, selectedInstructor.id);
    setIsPopupOpen(false);
    if (!error) {
      setIsModalOpen(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (!selectedCandidate || !selectedInstructor)
    return <div>Nešto je pošlo po zlu</div>;

  return (
    <div className={s.container}>
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

      {isPopupOpen && selectedInstructor && (
        <ConfirmationPopup
          prompt={`Dodijeli instruktora  ${selectedInstructor.firstName} ${selectedInstructor.lastName} kandidatu ${selectedCandidate.firstName} ${selectedCandidate.lastName}?`}
          handleConfirm={handleConfirmAssignment}
          togglePopup={closePopup}
        />
      )}
    </div>
  );
};

export default SchoolAdminAssignInstructorPage;
