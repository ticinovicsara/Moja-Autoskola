import { useCandidateEnrollment } from "@/api";
import { routes } from "@/constants";
import { EnrollmentStatus } from "@/enums";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

export const WaitingForApprove = () => {
  const { user, isLoading: userLoading } = useAuth();
  const userId = user?.id ?? "";
  const { enrollment, isLoading: enrollmentLoading } =
    useCandidateEnrollment(userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoading || enrollmentLoading) {
      return;
    }

    if (!user) {
      toast.error("Morate se prijaviti da bi nastavili");
      navigate(routes.LOGIN);
      return;
    }

    if (!enrollment || enrollment.status !== EnrollmentStatus.Pending) {
      toast.error("Pristup dozvoljen samo korisnicima koji čekaju odobrenje");
      navigate(routes.HOME);
      return;
    }
  }, [userLoading, enrollmentLoading, user, enrollment, navigate]);

  if (userLoading || enrollmentLoading) {
    return <div className="loader">Loading...</div>;
  }

  return <Outlet />;
};
