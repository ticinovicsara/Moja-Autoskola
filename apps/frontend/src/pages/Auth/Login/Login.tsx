import { useState } from "react";
import c from "./login.module.css";
import { useAuth } from "@/contexts/AuthContext/useAuth";
import { InputField } from "@/components";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { loginService } from "@/services/authService";
import { isValidEmail } from "@/utils/validateEmail";

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

    if (password.length < 5) {
      setError("Lozinka mora imati barem 5 znakova");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorMessage = validateInfo();
    if (!errorMessage) return;

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

        {error && <div className={c.errorMessage}>{error}</div>}

        <button className="authBtn">Dalje</button>
      </form>
    </>
  );
};
