import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import { UserRoles } from "@/types";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";

export const SchoolAdminRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!user) {
    toast.error("Morate se prijaviti da bi nastavili");
    return <Navigate to={routes.AUTH} />;
  }

  if (user.role !== UserRoles.SchoolAdmin) {
    toast.error("Samo admini škola mogu pristupiti ovoj stranici");
    return <Navigate to={routes.HOME} />;
  }

  return <Outlet />;
};
