import {
  AllOnOneSection,
  HeroSection,
  Navbar,
  ScheduleRideSection,
} from "@/components";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroSection />
        <AllOnOneSection />
        <ScheduleRideSection />
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
