import { Outlet } from "react-router-dom";

const CandidateLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CandidateLayout;
