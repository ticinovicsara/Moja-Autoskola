import DashboardLayout from "./DashboardLayuot";
import {
  ProgressCard,
  StatusCard,
  ScheduleCard,
  CandidateInstructorCard,
} from "../Cards";
import { useAuth, useCandidateProgress } from "@/hooks";

export const CandidateDashboard = () => {
  const context = useAuth();
  const userid = context.user?.id;
  if (!userid) {
    return <div>Loading...</div>;
  }

  console.log("USer id:", userid);
  const { progress, message } = useCandidateProgress(userid);

  return (
    <DashboardLayout
      top={
        message ? (
          <div>{message}</div>
        ) : (
          <ProgressCard title="Ukupno odrađeno" progress={progress || 0} />
        )
      }
      left={<StatusCard title="ODABERI TERMIN VOŽNJE" color="#F97C7C" />}
      right={
        <CandidateInstructorCard instructor="Marko Marković" phone="123" />
      }
      bottom={<ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />}
    />
  );
};
