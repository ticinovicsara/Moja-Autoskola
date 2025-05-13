import { useCandidateEnrollment } from "@/api";
import { routes } from "@/constants";
import { EnrollmentStatus, UserRoles } from "@/enums";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";

export const WaitingForApprove = () => {
  const { user, isLoading: userLoading } = useAuth();

  const userId = user?.id ?? "";
  const { enrollment, isLoading: enrollmentLoading } =
    useCandidateEnrollment(userId);

  if (userLoading || enrollmentLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!user) {
    toast.error("Morate se prijaviti da bi nastavili");
    return <Navigate to={routes.LOGIN} />;
  }

  if (user.role !== UserRoles.Guest) {
    toast.error("Samo novi korisnici mogu pristupiti ovoj stranici");
    return <Navigate to={routes.HOME} />;
  }

  if (!enrollment || enrollment.status !== EnrollmentStatus.WaitingForPayment) {
    toast.error("Pristup dozvoljen samo korisnicima koji čekaju odobrenje");
    return <Navigate to={routes.HOME} />;
  }

  return <Outlet />;
};
