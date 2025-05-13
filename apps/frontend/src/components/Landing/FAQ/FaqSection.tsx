import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";
import c from "./faq.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqData = [
  {
    question: "Mogu li se upisati u autoškolu preko aplikacije?",
    answer:
      "Da, možete se upisati direktno preko naše aplikacije. Proces je jednostavan i uključuje popunjavanje osnovnih podataka, upload potrebnih dokumenata i izbor željenog termina za početak obuke.",
  },
  {
    question: "Možemo li pratiti svoj napredak kroz aplikaciju?",
    answer:
      "Naravno! Kroz aplikaciju možete pratiti svaki aspekt svoje obuke - od teorijskih lekcija koje ste završili, rezultata testova, do broja odvoženih sati. Također, možete vidjeti komentare instruktora i preporuke za daljnje usavršavanje.",
  },
  {
    question: "Mogu li zakazati termin vožnje?",
    answer:
      "Da, aplikacija vam omogućava da pregledate slobodne termine i rezervirate onaj koji vam najviše odgovara. Također možete otkazati ili promijeniti termin najmanje 24 sata unaprijed bez naknade.",
  },
  {
    question: "Mogu li se upisati u autoškolu preko aplikacije?",
    answer:
      "Da, upis preko aplikacije je moguć i vrlo jednostavan. Nakon registracije, pratite korake za upis, priložite potrebne dokumente i izaberite paket obuke koji vam najviše odgovara.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <SectionWrapper title="FAQ">
      <div className={c.FAQContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={c.faqItem}>
            <button className={c.faqButton} onClick={() => toggleFAQ(index)}>
              <p className={c.question}>{item.question}</p>
              <div className={c.iconWrapper}>
                {openIndex === index ? (
                  <RemoveIcon fontSize="small" />
                ) : (
                  <AddIcon fontSize="small" />
                )}
              </div>
            </button>

            <div
              className={`${c.answerContainer} ${
                openIndex === index ? c.open : c.closed
              }`}
            >
              <div className={c.answer}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
