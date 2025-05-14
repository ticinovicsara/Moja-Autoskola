import c from "./pendingCandidate.module.css";
import Plus from "@/assets/svgs/Plus.svg";
import { EnrollmentRequest } from "@/types/enrollment";
import { useState } from "react";
import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";
import { EnrollmentPatchRequest } from "@/types/enrollmentPatchRequest";
import { EnrollmentStatus } from "@/enums";
import useUpdateEnrollmentRequest from "@/api/enrollment/useUpdateEnrollmentRequest";

type PendingCandidateCardProps = {
  enrollment: EnrollmentRequest;
};

export const PendingCandidateCard = ({
  enrollment,
}: PendingCandidateCardProps) => {
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);

  const { updateEnrollmentRequest } = useUpdateEnrollmentRequest();

  function toggleConfirmPopup() {
    setIsConfirmPopupOpen((prev) => !prev);
  }
  const handleApproveReq = () => {
    const updatedEnrollmentReq: EnrollmentPatchRequest = {
      id: enrollment.requestId,
      status: EnrollmentStatus.WaitingForPayment,
    };
    toggleConfirmPopup();
    updateEnrollmentRequest(updatedEnrollmentReq);
  };

  return (
    <div className={c.card} onClick={toggleConfirmPopup}>
      <p className={c.name}>{enrollment.candidateName}</p>
      <img src={Plus} alt="plus icon" />
      {isConfirmPopupOpen && (
        <ConfirmationPopup
          prompt="Jesi li siguran da želiš prihvatiti
zahtjev za upis?"
          togglePopup={toggleConfirmPopup}
          handleConfirm={handleApproveReq}
        />
      )}
    </div>
  );
};
