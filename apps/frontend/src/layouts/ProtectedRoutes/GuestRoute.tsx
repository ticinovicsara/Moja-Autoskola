import { routes } from "@/constants";
import { UserRoles } from "@/enums";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";

export const GuestRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!user) {
    toast.error("You must log in to continue");
    return <Navigate to={routes.LOGIN} />;
  }

  if (user.role !== UserRoles.Guest) {
    toast.error("You have to log in as guest to access that page");
    return <Navigate to={routes.HOME} />;
  }

  return <Outlet />;
};
