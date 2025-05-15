import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import { UserRoles } from "@/types";
import toast from "react-hot-toast";

export const CandidateRoute = () => {
  const { user, isLoading } = useAuth();
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        toast.error("Morate se prijaviti da bi nastavili");
        setRedirectTo(routes.AUTH);
      } else if (user.role !== UserRoles.Candidate) {
        toast.error("Samo kandidati škola mogu pristupiti ovoj stranici");
        setRedirectTo(routes.HOME);
      }
    }
  }, [user, isLoading]);

  if (isLoading) return <div className="loader">Loading...</div>;

  if (redirectTo) return <Navigate to={redirectTo} replace />;

  return <Outlet />;
};
