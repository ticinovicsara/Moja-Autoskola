import { GreetingComponent, InstructorDashboard } from "@/components";
import ChooseInstructorMenu from "@/components/ChooseInstructorMenu/ChooseInstructorMenu";
import { Button } from "@mui/material";
import { useState } from "react";

const InstructorDashboardPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <>
      <GreetingComponent />
      <InstructorDashboard />

      <Button variant="contained" onClick={togglePopup}>
        Otvori popup
      </Button>

      {isPopupOpen && (
        <ChooseInstructorMenu toggleChooseSessionMenu={togglePopup} />
      )}
    </>
  );
};

export default InstructorDashboardPage;
