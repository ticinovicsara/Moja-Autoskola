type Session = {
    id: string;
    schoolId: string;
    instructorId: string | null;
    type: SessionType;
    format: SessionFormat;
    startTime: Date;
    endTime: Date;
};

type SessionType = "Theory" | "FirstAid" | "Driving";
type SessionFormat = "Lesson" | "Test";

export type { Session };
