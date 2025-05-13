import {
  AllOnOneSection,
  BlogSection,
  HeroSection,
  ScheduleRideSection,
} from "@/components";
import FAQSection from "@/components/Landing/FAQ/FaqSection";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <HeroSection />
        <AllOnOneSection />
        <ScheduleRideSection />
        <BlogSection />
        <FAQSection />
      </div>
      <Toaster />
    </>
  );
};

export default HomePage;
