import DashboardLayout from "./DashboardLayuot";
import { ProgressCard, StatusCard, ScheduleCard } from "../Cards";

export const InstruktorDashboard = () => {
  return (
    <DashboardLayout
      top={<ProgressCard title="Ukupno odrađeno" progress={55} />}
      left={<StatusCard title="Rezerviraj termin vožnje" />}
      right={<div>Instruktor: Marko Marković</div>}
      bottom={<ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />}
    />
  );
};
