import { routes } from "@/constants";
import { UserRoles } from "@/types";
import { useAuth } from "@/hooks";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router";
import { useEffect, useState } from "react";

export const GuestRoute = () => {
  const { user, isLoading } = useAuth();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        toast.error("Morate se prijaviti da bi nastavili");
        setRedirectPath(routes.AUTH);
      } else if (user.role !== UserRoles.Guest) {
        toast.error("Samo novi korisnici mogu pristupiti ovoj stranici");
        setRedirectPath(routes.HOME);
      }
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (redirectPath) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
