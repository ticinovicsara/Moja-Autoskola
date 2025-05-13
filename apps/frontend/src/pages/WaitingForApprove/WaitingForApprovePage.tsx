import { LogoAndText } from "@/components";
import c from "./waiting.module.css";
export const WaitingForApprovePage = () => {
  return (
    <div className={`container ${c.waitingContainer}`}>
      <LogoAndText />
    </div>
  );
};
