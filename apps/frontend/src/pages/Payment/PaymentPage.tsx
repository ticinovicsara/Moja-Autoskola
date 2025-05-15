import { InputField, LogoAndText, PaymentPopup } from "@/components";
import c from "./payment.module.css";
import { useState } from "react";
import {
  validateCardNumber,
  validateOwner,
  validateExpireDate,
  validateCVV,
  formatCardNumberInput,
  formatExpireDateInput,
  formatCVVInput,
} from "@/utils";
import useUpdateEnrollmentRequest from "@/api/enrollment/useUpdateEnrollmentRequest";
import { useCandidateEnrollment } from "@/api";
import { useAuth } from "@/hooks";
import { EnrollmentPatchRequest } from "@/types/enrollmentPatchRequest";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";
import toast from "react-hot-toast";
import { UserRoles } from "@/types";

export const PaymentPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [cardNum, setCardNum] = useState("");
  const [owner, setOwner] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [CVV, setCVV] = useState("");

  const { updateEnrollmentRequest } = useUpdateEnrollmentRequest();
  const isGuest = user?.role === UserRoles.Guest;
  const { enrollment } = useCandidateEnrollment(user?.id || "", isGuest);

  const [errors, setErrors] = useState({
    cardNum: "",
    owner: "",
    expireDate: "",
    CVV: "",
  });

  const [showProcessingPopup, setShowProcessingPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const formatCardNum = (value: string) => {
    setCardNum(formatCardNumberInput(value));
  };

  const formatExpireDate = (value: string) => {
    setExpireDate(formatExpireDateInput(value));
  };

  const formatCVV = (value: string) => {
    setCVV(formatCVVInput(value));
  };

  const validateForm = () => {
    const newErrors = {
      cardNum: validateCardNumber(cardNum),
      owner: validateOwner(owner),
      expireDate: validateExpireDate(expireDate),
      CVV: validateCVV(CVV),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    setShowProcessingPopup(true);

    setTimeout(() => {
      setShowProcessingPopup(false);
      setShowSuccessPopup(true);

      setTimeout(() => {
        const updatedEnrollmentReq: EnrollmentPatchRequest = {
          id: enrollment?.requestId || "",
          status: EnrollmentStatus.Approved,
        };
        updateEnrollmentRequest(updatedEnrollmentReq);
        setShowSuccessPopup(false);
        toast.success("Molimo ponovno se prijavite kako bi nastavili.");
        navigate(routes.LOGIN);
      }, 2000);
    }, 2000);
  };

  return (
    <>
      {showProcessingPopup && (
        <PaymentPopup
          action="Plaćanje je u tijeku"
          actionColor="#84cdee"
          description="Proces može potrajati neko vrijeme...
Molimo te da ne zatvaraš stranicu dok proces traje!"
        />
      )}

      {showSuccessPopup && (
        <PaymentPopup
          action="PLAĆANJE JE USPJELO"
          actionColor="#b1cf86"
          description="Registriramo te kao kandidata...
Molimo te da ne zatvaraš stranicu dok proces traje!"
        />
      )}

      <div className={`${c.paymentContainer} container`}>
        <LogoAndText />
        <div className={c.cardInfo}>
          <InputField
            placeholder="Broj kartice: XXXX XXXX XXXX XXXX"
            type="text"
            value={cardNum}
            onChange={formatCardNum}
            error={errors.cardNum}
          />
          <div className={c.detailsWrapper}>
            <InputField
              placeholder="Vrijedi do (MM/GG)"
              type="text"
              value={expireDate}
              onChange={formatExpireDate}
              error={errors.expireDate}
            />
            <InputField
              placeholder="CVV"
              type="text"
              value={CVV}
              onChange={formatCVV}
              error={errors.CVV}
            />
          </div>
          <InputField
            placeholder="Vlasnik kartice"
            type="text"
            value={owner}
            onChange={setOwner}
            error={errors.owner}
          />
        </div>
        <button className="authBtn" onClick={handlePayment}>
          Plati
        </button>
      </div>
    </>
  );
};
