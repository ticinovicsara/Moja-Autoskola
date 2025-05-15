import { useAuth } from "@/hooks";
import c from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useCandidateEnrollment } from "@/api";
import { LogoAndText } from "@/components/LogoAndText/LogoAndText";
import { UserRoles } from "@/types";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";
export const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isGuest = user?.role === UserRoles.Guest;
  const { enrollment } = useCandidateEnrollment(user?.id || "", isGuest);

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
        else if (enrollment?.status === EnrollmentStatus.WaitingForPayment)
          navigate(routes.PAYMENT);
        else navigate(routes.GUEST);
        break;
      case UserRoles.SchoolAdmin:
        navigate(routes.SCHOOL_ADMIN_DASHBOARD);
        break;
      case UserRoles.Instructor:
        navigate(routes.INSTRUCTOR_DASHBOARD);
        break;
      default:
        navigate(routes.HOME);
        break;
    }
  };

  return (
    <div className={c.hero}>
      <div className={c.heroWrapper}>
        <div className={c.elipsse}>
          <LogoAndText />

          <div className="container">
            <button className={`${c.startBtn} authBtn `} onClick={handleStart}>
              ZAPOČNI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
