import { SessionFormat, SessionType } from "@/types";

function getMonthAbbreviation(month: number): string {
    const months = [
        "Sij",
        "Vel",
        "Ožu",
        "Tra",
        "Svi",
        "Lip",
        "Srp",
        "Kol",
        "Ruj",
        "Lis",
        "Stu",
        "Pro",
    ];
    return months[month];
}

function getMonthFromDate(date: Date): string {
    const months = [
        "Siječanj",
        "Veljača",
        "Ožujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac",
    ];
    return months[date.getMonth()];
}

function getSessionType(type: SessionType): string {
    switch (type) {
        case "Theory":
            return "Propisi";
        case "FirstAid":
            return "Prva pomoć";
        case "Driving":
            return "Vožnja";
        default:
            return "Nepoznato";
    }
}

function getSessionFormat(format: SessionFormat): string {
    switch (format) {
        case "Lesson":
            return "Predavanje";
        case "Test":
            return "Ispit";
        default:
            return "Nepoznato";
    }
}

function getFormattedTime(date: Date): string {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}

function getUpcomingMonday(date: Date): Date {
    const day = date.getDay();
    const daysUntilMonday = day === 0 ? 1 : 7 - day + 1;
    const upcomingMonday = new Date(date);
    upcomingMonday.setDate(date.getDate() + daysUntilMonday);
    upcomingMonday.setHours(0, 0, 0, 0);
    return upcomingMonday;
}

function getDayFromDate(date: Date): string {
    const days = [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "Četvrtak",
        "Petak",
        "Subota",
    ];
    return days[date.getDay()];
}

export {
    getMonthAbbreviation,
    getMonthFromDate,
    getSessionType,
    getSessionFormat,
    getFormattedTime,
    getUpcomingMonday,
    getDayFromDate,
};
