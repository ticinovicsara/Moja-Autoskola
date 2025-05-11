import DashboardLayout from "./DashboardLayuot";
import { StatusCard, ScheduleCard } from "../Cards";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { useState } from "react";
import { InstructorPopup } from "../Popup/InstructorPopup";
import { useAuth } from "@/hooks";

export const InstructorDashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useAuth();
  const userId = user?.id || "";
  const { nextSession, loading: loadingNext } =
    useInstructorNextSession(userId);

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
            linkTo={routes.INSTRUCTOR_CANDIDATE_LIST}
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

      {showPopup && <InstructorPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};
