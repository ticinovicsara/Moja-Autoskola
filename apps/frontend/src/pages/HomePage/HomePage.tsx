import {
  AllOnOneSection,
  BlogSection,
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
        <BlogSection />
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
