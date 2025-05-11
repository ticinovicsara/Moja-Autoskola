import { Day } from "@/enums";

export const formatSessionTime = (startTime: string) => {
  if (!startTime) return "";

  const sessionStart = new Date(startTime);

  const dayName = Day[sessionStart.getDay()];

  const formattedTime = sessionStart.toLocaleTimeString("hr-HR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dayName}, ${formattedTime}`;
};
