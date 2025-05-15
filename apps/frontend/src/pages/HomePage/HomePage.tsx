import { AllOnOneSection, BlogSection, HeroSection } from "@/components";
import FooterComponent from "@/components/Footer/FooterComponent";
import FAQSection from "@/components/Landing/FAQ/FaqSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <AllOnOneSection />
        <BlogSection />
        <FAQSection />
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
