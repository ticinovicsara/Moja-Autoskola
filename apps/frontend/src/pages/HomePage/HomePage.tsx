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
      <HeroSection />
      <div className="container">
        <AllOnOneSection />
        <ScheduleRideSection />
        <BlogSection />
        <FAQSection />
      </div>
    </>
  );
};

export default HomePage;
