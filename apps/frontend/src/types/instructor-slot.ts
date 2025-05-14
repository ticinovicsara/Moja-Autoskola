type InstructorSlot = {
    id: string;
    instructorId: string;
    startTime: Date;
    endTime: Date;
};

type AddInstructorSlotReq = {
    id: string;
    instructorId: string;
    startTime: Date;
    endTime: Date;
};

export type { InstructorSlot, AddInstructorSlotReq };
