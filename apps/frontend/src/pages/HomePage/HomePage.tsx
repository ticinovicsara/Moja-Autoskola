import {
  AllOnOneSection,
  BlogSection,
  HeroSection,
  ScheduleRideSection,
} from "@/components";
import FAQSection from "@/components/Landing/FAQ/FaqSection";

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
    </>
  );
};

export default HomePage;
