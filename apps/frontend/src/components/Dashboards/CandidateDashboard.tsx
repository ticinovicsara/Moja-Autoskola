import DashboardLayout from "./DashboardLayuot";
import {
  ProgressCard,
  StatusCard,
  ScheduleCard,
  CandidateInstructorCard,
} from "../Cards";

export const CandidateDashboard = () => {
  return (
    <DashboardLayout
      top={<ProgressCard title="Ukupno odrađeno" progress={55} />}
      left={<StatusCard title="Rezerviraj termin vožnje" color="#F97C7C" />}
      right={
        <CandidateInstructorCard instructor="Marko Marković" phone="123" />
      }
      bottom={<ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />}
    />
  );
};
