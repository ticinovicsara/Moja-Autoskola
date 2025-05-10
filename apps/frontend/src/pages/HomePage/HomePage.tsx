import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  return user ? <div>HomePage</div> : <Navigate to={routes.LOGIN} />;
};

export default HomePage;
