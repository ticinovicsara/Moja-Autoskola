import { ProgressCard } from "@/components/Cards/ProgressCard/ProgressCard";
import { ScheduleCard } from "@/components/Cards/ScheduleCard/ScheduleCard";
import { StatusCard } from "@/components/Cards/StatusCard/StatusCard";

const HomePage = () => {
  return (
    <div>
      <section className="cards-container">
        <ProgressCard title="Ukupno odradjeno" progress={55} />

        <StatusCard title="REZERVIRAJ TERMIN VOŽNJE" />

        <ScheduleCard activity="Predavanje" time="Četvrtak, 16:00" />
      </section>
    </div>
  );
};

export default HomePage;
