import { useState } from "react";
import c from "./login.module.css";
import { useAuth } from "@/contexts/AuthContext/useAuth";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { login } = useAuth();

  return (
    <>
      <p>login</p>
    </>
  );
};
