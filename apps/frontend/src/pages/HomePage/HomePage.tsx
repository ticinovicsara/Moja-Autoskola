import { CandidateInstructorCard } from "@/components/Cards/CandidateInstructorCard/CandidateInstructorCard";
import { ProgressCard } from "@/components/Cards/ProgressCard/ProgressCard";
import { ScheduleCard } from "@/components/Cards/ScheduleCard/ScheduleCard";
import { StatusCard } from "@/components/Cards/StatusCard/StatusCard";
import { routes } from "@/constants";
import { useAuth } from "@/hooks";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  return user ? (
    <div>
      <section className="cards-container">
        <ProgressCard title="Ukupno odradjeno" progress={55} />

        <StatusCard title="REZERVIRAJ TERMIN VOŽNJE" />

        <ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />

        <CandidateInstructorCard instructor="Marko Marković" phone="123" />
      </section>
    </div>
  ) : (
    <Navigate to={routes.LOGIN} />
  );
};

export default HomePage;
