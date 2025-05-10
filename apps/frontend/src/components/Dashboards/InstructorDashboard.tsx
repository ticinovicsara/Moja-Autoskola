import DashboardLayout from "./DashboardLayuot";
import { StatusCard, ScheduleCard } from "../Cards";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useState } from "react";
import Popup from "../Popup/Popup";

export const InstructorDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigateToCandidates = () => {
    console.log("Attempting navigation to:", routes.INSTRUCTOR_CANDIDATE_LIST);
    navigate("/instructor-candidate-list");
  };

  return (
    <>
      <DashboardLayout
        left={
          <StatusCard
            title="REZERVIRAJ TERMIN VOŽNJE"
            color="#F97C7C"
            onClick={() => setShowPopup(true)}
          />
        }
        right={
          <StatusCard
            title="POGLEDAJ LISTU KANDIDATA"
            color="#B1CF86"
            onClick={handleNavigateToCandidates}
          />
        }
        bottom={
          <ScheduleCard
            activity="Predavanje"
            time="Četvrtak, 16:00"
            onClick={() => navigate(routes.INSTRUCTOR_CALENDAR)}
          />
        }
      />

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};
