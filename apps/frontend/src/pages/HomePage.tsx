import { DashboardHeader } from "@/components/DashboardHeader";
import { UserRole } from "@/enums/UserRole";
import { Navbar } from "@/components/NavBar";
import { SessionCard } from "@/components/SessionCard";
import { Sidebar } from "@/components/Sidebar";
import { CandidateListCard } from "@/components/CandidateListCard";

const user = {
  name: "John Doe",
  role: UserRole.Admin,
};

const HomePage = () => {
  return (
    <>
      <DashboardHeader
        user={user}
        onMenuToggle={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <Navbar />

      <SessionCard session={{ activity: "Sample Session", date: new Date() }} />

      <Sidebar
        items={[]}
        open={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <CandidateListCard
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default HomePage;
