import { ArrowBack } from "@/components";
import { Outlet, useLocation } from "react-router-dom";
import c from "./authlayout.module.css";

export const AuthLayout = () => {
  const location = useLocation();
  const title = location.pathname.includes("register")
    ? "Registriraj se"
    : "Prijavi se";

  return (
    <div className={`${c.authWrapper} container`}>
      <ArrowBack />
      <div className={c.info}>
        <h2 className={c.title}>{title}</h2>
        <Outlet />
      </div>
    </div>
  );
};
