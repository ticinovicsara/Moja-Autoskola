import { useAuth } from "@/hooks";
import c from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { UserRoles } from "@/enums";
import { LogoAndText } from "@/components/LogoAndText/LogoAndText";
export const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleStart = () => {
    if (!user) {
      navigate(routes.LOGIN);
      return;
    }

    switch (user.role) {
      case UserRoles.Candidate:
        navigate(routes.CANDIDATE_DASHBOARD);
        break;
      case UserRoles.Guest:
        navigate("/guest/dashboard");
        break;
      case UserRoles.SchoolAdmin:
        navigate("/school-admin/dashboard");
        break;
      case UserRoles.Instructor:
        navigate("/instructor/dashboard"); //kad budu postojala ova 3 pa dodat onda samo u routes
        break;
      default:
        navigate(routes.HOME);
        break;
    }
  };

  return (
    <div className={c.hero}>
      <LogoAndText />
      <button className={c.startBtn} onClick={handleStart}>
        ZAPOČNI
      </button>
    </div>
  );
};
