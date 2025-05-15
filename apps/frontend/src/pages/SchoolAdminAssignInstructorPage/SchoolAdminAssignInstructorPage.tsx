import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../InstructorCandidateListPage/instructorCandidateList.module.css";
import s from "./schoolAdminList.module.css";
import { ArrowBack, ConfirmationPopup } from "@/components";
import { useAssignInstructor, useAuth } from "@/hooks";
import { User } from "@/types";
import ChooseInstructorMenu from "@/components/ChooseInstructorMenu/ChooseInstructorMenu";
import {
  useCandidatesWithoutInstructor,
  useInstructorsBySchoolId,
} from "@/api";
import useSchoolByUserId from "@/api/school/useSchoolByUserId";
import toast from "react-hot-toast";
import CandidateSearch from "@/components/CandidateSearch/CandidateSearch";

const SchoolAdminAssignInstructorPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<User | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<User | null>(
    null
  );

  const { user } = useAuth();
  const { school, isLoading: isLoadingSchool } = useSchoolByUserId(
    user?.id || ""
  );
  const schoolId = school?.id || "";

  console.log("SCHOOLID: ", schoolId);

  const { candidates, isLoading: isLoadingCandidates } =
    useCandidatesWithoutInstructor(schoolId);
  const { instructors, isLoading: isLoadingInstructors } =
    useInstructorsBySchoolId(schoolId);

  const {
    assign,
    isLoading: isAssignLoading,
    error,
    success,
    refetchCandidates,
  } = useAssignInstructor(schoolId);

  const filteredCandidates = useMemo(() => {
    if (!searchTerm) return candidates;
    return candidates.filter((candidate: User) => {
      const fullName =
        `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
  }, [candidates, searchTerm]);

  const isLoading =
    isLoadingSchool || isLoadingCandidates || isLoadingInstructors || !user;

  const openInstructorModal = useCallback((candidate: User) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  }, []);

  const handleInstructorSelect = useCallback((instructor: User) => {
    setSelectedInstructor(instructor);
    setIsPopupOpen(true);
  }, []);

  const handleConfirmAssignment = useCallback(async () => {
    if (!selectedCandidate || !selectedInstructor) return;

    await assign(selectedCandidate.id, selectedInstructor.id);
    setIsPopupOpen(false);
    setIsModalOpen(false);
    await refetchCandidates();
  }, [selectedCandidate, selectedInstructor, assign, candidates]);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);
  const handleSearchChange = useCallback((value: any) => {
    setSearchTerm(value);
  }, []);
  const toggleChooseInstructorMenu = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (success) {
      toast.success("Instruktor uspješno dodijeljen!");
      setIsModalOpen(false);
    }

    if (error) {
      toast.error(error || "Instruktor je već dodijeljen kandidatu!.");
    }
  }, [success, error]);

  if (isLoading) {
    return <p>Učitavanje podataka...</p>;
  }

  return (
    <div className={s.container}>
      <div className={styles["navigation-container"]}>
        <ArrowBack />
        <h1 className={styles["page-title"]}>LISTA KANDIDATA</h1>
      </div>

      <CandidateSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        candidates={filteredCandidates}
        onCandidateSelect={openInstructorModal}
        returnMessage="Svi kandidati imaju svog instruktora!"
      />

      {isModalOpen && selectedCandidate && (
        <ChooseInstructorMenu
          toggleChooseInstructorMenu={toggleChooseInstructorMenu}
          instructors={instructors}
          onSelectInstructor={handleInstructorSelect}
        />
      )}

      {isAssignLoading && <p>Dodjeljivanje u tijeku...</p>}

      {isPopupOpen && selectedInstructor && (
        <ConfirmationPopup
          prompt={`Dodijeli instruktora ${selectedInstructor.firstName} ${selectedInstructor.lastName} kandidatu ${selectedCandidate?.firstName} ${selectedCandidate?.lastName}?`}
          handleConfirm={handleConfirmAssignment}
          togglePopup={closePopup}
        />
      )}
    </div>
  );
};

export default SchoolAdminAssignInstructorPage;
