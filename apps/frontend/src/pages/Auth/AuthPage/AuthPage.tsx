import { ArrowBack, LogoAndText } from "@/components";
import c from "./auth.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
export const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`container ${c.authContainer}`}>
      <ArrowBack />
      <div className={c.wrapper}>
        <LogoAndText />

        <div className={c.functions}>
          <button className={"authBtn"} onClick={() => navigate(routes.LOGIN)}>
            Prijavi se
          </button>
          <div className={c.createAcc}>
            <p>Nemaš račun?</p>
            <p className={c.register} onClick={() => navigate(routes.REGISTER)}>
              Registriraj se
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
