import { routes } from "@/constants";
import { UserRoles } from "@/types";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";

export const GuestRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
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

  return <Outlet />;
};
