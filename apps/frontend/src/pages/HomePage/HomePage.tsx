import { HeroSection, Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroSection />
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
