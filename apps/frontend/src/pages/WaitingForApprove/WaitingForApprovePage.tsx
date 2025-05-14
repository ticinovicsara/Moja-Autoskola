import { LogoAndText } from "@/components";
import c from "./waiting.module.css";
export const WaitingForApprovePage = () => {
  return (
    <div className={`container ${c.waitingContainer}`}>
      <LogoAndText />
      <div className={c.feedback}>
        <p className={c.green}>Tvoj zahtjev je poslan</p>
        <p>
          Poslali smo tvoj zahtjev autoškoli i sad samo čekamo zeleno svjetlo.
        </p>
        <p>Čim te odobre, moći ćeš platiti online.</p>
      </div>
    </div>
  );
};
