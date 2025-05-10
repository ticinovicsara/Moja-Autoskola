import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  return user ? (
    <>
      <h1>Welcome back on home page {user?.firstName} 👋</h1>
      <Toaster />
    </>
  ) : (
    <Navigate to={routes.LOGIN} />
  );
};

export default HomePage;
