import { useState } from "react";
import c from "./login.module.css";
import { InputField } from "@/components";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { isValidEmail } from "@/utils/validateEmail";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { loginService } from "@/api";
import { validatePassword } from "@/utils/validatePassword";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const validateInfo = () => {
    if (!isValidEmail(email)) {
      setError("Neispravan format email-a");
      return false;
    }

    const passwordErrorMessage = validatePassword(password);
    if (passwordErrorMessage) {
      setError(passwordErrorMessage);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateInfo();
    if (!isValid) return;

    setError("");

    try {
      if (localStorage.getItem("token")) localStorage.removeItem("token");

      const data = await loginService(email, password);

      if (data.access_token) {
        login(data.access_token);
        toast.success("Uspješna prijava");
        navigate(routes.HOME);
      }
    } catch (error) {
      setError("Neispravni podaci");
    }
  };

  return (
    <>
      <form className={c.inputsWrapper} onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Email"
          onChange={setEmail}
          value={email}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={setPassword}
          value={password}
        />

        {error && <div className="errorMessage">{error}</div>}

<<<<<<< HEAD
        <button className="authBtn">Dalje</button>
=======
        <button className={`authBtn ${c.formBtn}`}>Dalje</button>
>>>>>>> fad5437a5d4fcf9a610f048b1ace51ee22307a03
      </form>
    </>
  );
};
