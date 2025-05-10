import DashboardLayout from "./DashboardLayuot";
import { StatusCard, ScheduleCard } from "../Cards";

export const InstructorDashboard = () => {
  return (
    <DashboardLayout
      left={<StatusCard title="REZERVIRAJ TERMIN VOŽNJE" color="#F97C7C" />}
      right={<StatusCard title="POGLEDAJ LISTU KANDIDATA" color="#B1CF86" />}
      bottom={<ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />}
    />
  );
};
