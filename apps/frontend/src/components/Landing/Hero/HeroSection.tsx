import { useAuth } from "@/hooks";
import c from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { EnrollmentStatus, UserRoles } from "@/enums";
import { LogoAndText } from "@/components/LogoAndText/LogoAndText";
import { useCandidateEnrollment } from "@/api";
export const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { enrollment } = useCandidateEnrollment(user?.id || "");

  const handleStart = () => {
    if (!user) {
      navigate(routes.AUTH);
      return;
    }

    switch (user.role) {
      case UserRoles.Candidate:
        navigate(routes.CANDIDATE_DASHBOARD);
        break;
      case UserRoles.Guest:
        if (enrollment?.status === EnrollmentStatus.Pending)
          navigate(routes.WAITING_FOR_APPROVE);
        else navigate(routes.GUEST);
        break;
      case UserRoles.SchoolAdmin:
        navigate("/school-admin/dashboard");
        break;
      case UserRoles.Instructor:
        navigate("/instructor/dashboard"); //kad budu postojala ova 2 pa dodat onda samo u routes
        break;
      default:
        navigate(routes.HOME);
        break;
    }
  };

  return (
    <div className={c.hero}>
      <LogoAndText />
      <button className={"authBtn"} onClick={handleStart}>
        ZAPOČNI
      </button>
    </div>
  );
};
