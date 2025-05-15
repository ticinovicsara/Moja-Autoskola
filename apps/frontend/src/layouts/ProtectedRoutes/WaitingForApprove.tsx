import { useCandidateEnrollment } from "@/api";
import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";
import { UserRoles } from "@/types";

export const WaitingForApprove = () => {
  const { user, isLoading: userLoading } = useAuth();
  const userId = user?.id ?? "";
  const isGuest = user?.role === UserRoles.Guest;

  const { enrollment, isLoading: enrollmentLoading } = useCandidateEnrollment(
    userId,
    isGuest
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (userLoading || enrollmentLoading) return;

    if (!user) {
      toast.error("Morate se prijaviti da bi nastavili");
      navigate(routes.AUTH);
      return;
    }

    if (enrollment === undefined || enrollment === null || !enrollment) {
      return;
    }

    if (enrollment.status !== EnrollmentStatus.Pending) {
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
