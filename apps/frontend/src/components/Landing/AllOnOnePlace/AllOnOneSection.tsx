import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";
import c from "./allOnOne.module.css";
import { CheckMark, Todo, Calendar, RedBook, Chat } from "@/assets/svgs";
import { AnimationCard } from "./AnimationCard/AnimationCard";
import { useEffect, useState } from "react";

const cards = [
  { title: "Chat s instuktorom", iconUrl: Chat },
  { title: "PREGLED PREDAVANJA, VOŽNJI I ISPITA", iconUrl: Calendar },
  { title: "MATERIJALI ZA UČENJE", iconUrl: RedBook },
  { title: "ZAKAZIVANJE VOŽNJI", iconUrl: CheckMark },
  { title: "PRAĆENJE NAPRETKA", iconUrl: Todo },
];
export const AllOnOneSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [phase, setPhase] = useState<"idle" | "exiting" | "entering">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exiting");
      setIsAnimating(true);

      setTimeout(() => {
        setPhase("entering");

        setTimeout(() => {
          setCurrentIndex(nextIndex);
          setNextIndex((nextIndex + 1) % cards.length);
          setIsAnimating(false);
          setPhase("idle");
        }, 300);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <SectionWrapper title="Sve na jednom mjestu!">
      <div className={c.carouselWrapper}>
        <div className={`${c.slider} ${isAnimating ? c.animate : ""}`}>
          <div
            className={`${c.cardWrapper} ${phase === "exiting" ? c.exit : ""}`}
          >
            <AnimationCard
              title={cards[currentIndex].title}
              iconUrl={cards[currentIndex].iconUrl}
            />
          </div>
          <div
            className={`${c.cardWrapper} ${phase === "entering" ? c.enter : ""}`}
          >
            <AnimationCard
              title={cards[nextIndex].title}
              iconUrl={cards[nextIndex].iconUrl}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
