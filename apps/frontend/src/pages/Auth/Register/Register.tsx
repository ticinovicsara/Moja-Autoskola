import { useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "./register.module.css";
import { InputField } from "@/components";
import { isValidEmail } from "@/utils/validateEmail";
import toast, { Toaster } from "react-hot-toast";
import { routes } from "@/constants";
import { validatePassword } from "@/utils/validatePassword";

type CreateUserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  oib: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CreateUserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    oib: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateUserFormData, string>>
  >({});

  const updateField = (field: keyof CreateUserFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepNumber: number) => {
    const stepErrors: Partial<Record<keyof CreateUserFormData, string>> = {};

    switch (stepNumber) {
      case 1:
        if (!formData.firstName.trim())
          stepErrors.firstName = "Ime je obavezno";
        if (!formData.lastName.trim())
          stepErrors.lastName = "Prezime je obavezno";
        break;
      case 2:
        if (!isValidEmail(formData.email))
          stepErrors.email = "Nevažeći email format";

        const passwordErrorMessage = validatePassword(formData.password);
        if (passwordErrorMessage) stepErrors.password = passwordErrorMessage;

        break;
      case 3:
        if (!formData.dateOfBirth)
          stepErrors.dateOfBirth = "Datum rođenja je obavezan";

        if (!/^\d{11}$/.test(formData.oib))
          stepErrors.oib = "OIB mora imati 11 znamenki";
        break;
    }

    return stepErrors;
  };

  const nextStep = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      toast.error("Molimo popunite trenutni korak");
      return;
    }

    setErrors({});
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Submitting data:", formData);
      navigate(routes.HOME);
    }
  };

  const goToStep = (targetStep: number) => {
    for (let i = 1; i < targetStep; i++) {
      const stepErrors = validateStep(i);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        toast.error("Molimo popunite trenutni korak");
        return;
      }
    }

    setErrors({});
    setStep(targetStep);
  };

  const renderStepDots = () => (
    <div className={c.stepDots}>
      {[1, 2, 3, 4].map((dot) => (
        <div
          key={dot}
          className={`${c.dot} ${step === dot ? c.activeDot : ""}`}
          onClick={() => goToStep(dot)}
        />
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className={c.inputsWrapper}>
            <InputField
              type="text"
              value={formData.firstName}
              onChange={(val) => updateField("firstName", val)}
              placeholder="Ime"
              error={errors.firstName}
            />
            <InputField
              type="text"
              value={formData.lastName}
              onChange={(val) => updateField("lastName", val)}
              placeholder="Prezime"
              error={errors.lastName}
            />
          </div>
        );
      case 2:
        return (
          <div className={c.inputsWrapper}>
            <InputField
              type="email"
              value={formData.email}
              onChange={(val) => updateField("email", val)}
              placeholder="Email"
              error={errors.email}
            />
            <InputField
              type="password"
              value={formData.password}
              onChange={(val) => updateField("password", val)}
              placeholder="Lozinka"
              error={errors.password}
            />
          </div>
        );
      case 3:
        return (
          <div className={c.inputsWrapper}>
            <InputField
              type="date"
              value={formData.dateOfBirth}
              onChange={(val) => updateField("dateOfBirth", val)}
              placeholder="Datum rođenja"
              error={errors.dateOfBirth}
            />
            <InputField
              type="text"
              value={formData.oib}
              onChange={(val) => updateField("oib", val)}
              placeholder="OIB"
              error={errors.oib}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={c.registrationForm}>
      {renderStepContent()}
      {renderStepDots()}
      <div className={c.buttonContainer}>
        <button onClick={nextStep} className={`${c.nextButton} authBtn`}>
          {step === 4 ? "ZAVRŠI" : "DALJE"}
        </button>
      </div>
      <Toaster />
    </div>
  );
};
