import { GreetingComponent, CandidateDashboard, Navbar } from "@/components";
import FooterComponent from "@/components/Footer/FooterComponent";

const CandidateDashboardPage = () => {
  return (
    <>
      <Navbar />
      <GreetingComponent />
      <CandidateDashboard />
      <FooterComponent />
    </>
  );
};

export default CandidateDashboardPage;
