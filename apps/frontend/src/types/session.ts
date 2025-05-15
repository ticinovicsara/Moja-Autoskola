export type Session = {
    id: string;
    schoolId: string;
    instructorId: string | null;
    type: SessionType;
    format: SessionFormat;
    startTime: Date;
    endTime: Date;
};

export enum SessionType {
    Theory = "Theory",
    FirstAid = "FirstAid",
    Driving = "Driving",
}

export enum SessionFormat {
    Lesson = "Lesson",
    Test = "Test",
}

export type DrivingSessionReq = {
    instructorSlotId: string;
    instructorId: string;
    candidateId: string;
};
