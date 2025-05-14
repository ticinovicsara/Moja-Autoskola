import { useAuth } from "@/hooks";
import c from "./schoolAdmin.module.css";
import Arrow from "@/assets/svgs/Arrow2.svg";
export const SchoolAdminDashboard = () => {
  const { user } = useAuth();
  return (
    <div className={`${c.adminDashboard} container`}>
      <div className={c.greeting}>
        <p>Pozdrav,</p>
        <h1>{user?.firstName.toUpperCase()}</h1>
      </div>
      <div className={c.cards}>
        <div className={c.candidateNum}>
          <p>Broj kandidata: </p>
          <div className={c.candidateBar}>
            <h3>27/50</h3> <div className={c.progressBar}></div>
          </div>
        </div>

        <div className={c.assign}>
          <p>DODIJELI INSTRUKTORA KANDIDATU</p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className={c.approve}>
          <p>ODOBRI ZAHTJEVE ZA UPIS</p>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
