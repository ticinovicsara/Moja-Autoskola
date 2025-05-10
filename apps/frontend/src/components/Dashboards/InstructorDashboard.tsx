import DashboardLayout from "./DashboardLayuot";
import { ProgressCard, StatusCard, ScheduleCard } from "../Cards";

export const InstructorDashboard = () => {
  return (
    <DashboardLayout
      top={<ProgressCard title="Ukupno odrađeno" progress={55} />}
      left={<StatusCard title="REZERVIRAJ TERMIN VOŽNJE" color="#F97C7C" />}
      right={<StatusCard title="POGLEDAJ LISTU KANDIDATA" color="#B1CF86" />}
      bottom={<ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />}
    />
  );
};
