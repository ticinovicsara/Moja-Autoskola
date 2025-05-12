import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const InstructorLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default InstructorLayout;
