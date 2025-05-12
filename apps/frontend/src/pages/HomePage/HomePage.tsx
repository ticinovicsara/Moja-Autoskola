import { useAuth } from "@/hooks";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <>
      <h1>Welcome back on home page {user?.firstName} 👋</h1>
      <Toaster />
    </>
  );
};

export default HomePage;
