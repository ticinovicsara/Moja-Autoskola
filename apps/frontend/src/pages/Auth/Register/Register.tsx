import { useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "./register.module.css";
import { InputField } from "@/components";
import { isValidEmail } from "@/utils/validateEmail";
import toast from "react-hot-toast";
import { routes } from "@/constants";
import { validatePassword } from "@/utils/validatePassword";
import { isValidCroatianPhoneNumber } from "@/utils/formatPhoneNumber";
import { CreateUserFormData } from "@/types";
import { registerService } from "@/api/auth";
import { useAuth } from "@/hooks";

export const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CreateUserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    oib: "",
    phoneNumber: "",
  });

  const [retypedPassword, setRetypedPassword] = useState<string>("");

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
        if (formData.firstName.trim().length < 2)
          stepErrors.firstName = "Ime je obavezno i mora imati barem 2 slova";
        if (formData.lastName.trim().length < 2)
          stepErrors.lastName =
            "Prezime je obavezno i mora imati barem 2 slova";
        break;
      case 2:
        if (!isValidEmail(formData.email))
          stepErrors.email = "Nevažeći email format";

        if (!formData.phoneNumber)
          stepErrors.phoneNumber = "Broj mobitela je obavezan";
        else if (!isValidCroatianPhoneNumber(formData.phoneNumber))
          stepErrors.phoneNumber =
            "Unesite ispravan hrvatski broj mobitela (+385 9X XXX XXXX)";

        break;
      case 3:
        const passwordErrorMessage = validatePassword(formData.password);
        if (passwordErrorMessage) stepErrors.password = passwordErrorMessage;
        if (formData.password !== retypedPassword) {
          stepErrors.password = "Lozinke se ne podudaraju";
        }
        break;
      case 4:
        const min = new Date("1900-01-01");
        const max = new Date();
        const dateOfBirth = new Date(formData.dateOfBirth);
        if (!formData.dateOfBirth)
          stepErrors.dateOfBirth = "Unesite datum rođenja";

        if (dateOfBirth < min || dateOfBirth > max)
          stepErrors.dateOfBirth =
            "Datum rođenja mora biti veći od 1900. i manji od današnjeg dana.";

        if (!/^\d{11}$/.test(formData.oib))
          stepErrors.oib = "OIB mora imati 11 znamenki";
        break;
    }

    return stepErrors;
  };

  const nextStep = async () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      try {
        if (localStorage.getItem("token")) localStorage.removeItem("token");

        const data = await registerService(formData);
        if (data.access_token) {
          login(data.access_token);
          navigate(routes.HOME);
          toast.success("Uspješna registracija!");
        }
      } catch (error: any) {
        console.error("Error while registering: ", error);
        toast.error(
          error.message || "Došlo je do greške prilikom registracije."
        );
      }
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
              type="tel"
              value={formData.phoneNumber}
              onChange={(val) => updateField("phoneNumber", val)}
              placeholder="Broj mobitela"
              pattern="^(\+385\d{9,10}|0\d{9,10})$"
              error={errors.phoneNumber}
            />
          </div>
        );
      case 3:
        return (
          <div className={c.inputsWrapper}>
            <InputField
              type="password"
              value={formData.password}
              onChange={(val) => updateField("password", val)}
              placeholder="Lozinka"
            />
            <InputField
              type="password"
              value={retypedPassword}
              onChange={setRetypedPassword}
              placeholder="Potvrdi lozinku"
              error={errors.password}
            />
          </div>
        );
      case 4:
        return (
          <div className={c.inputsWrapper}>
            <InputField
              label="Datum rođenja"
              type="date"
              value={
                formData.dateOfBirth
                  ? formData.dateOfBirth.toString().split("T")[0]
                  : ""
              }
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
        <button onClick={nextStep} className={`${c.formBtn} authBtn`}>
          {step === 4 ? "ZAVRŠI" : "DALJE"}
        </button>
      </div>
    </div>
  );
};
