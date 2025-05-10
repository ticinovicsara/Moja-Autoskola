import { GreetingComponent, InstructorDashboard, Navbar } from "@/components";
import FooterComponent from "@/components/Footer/FooterComponent";

const InstructorDashboardPage = () => {
  return (
    <>
      <Navbar />
      <GreetingComponent />
      <InstructorDashboard />
      <FooterComponent />
    </>
  );
};

export default InstructorDashboardPage;
