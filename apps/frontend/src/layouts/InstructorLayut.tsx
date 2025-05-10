import { Outlet } from "react-router-dom";

const InstructorLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default InstructorLayout;
