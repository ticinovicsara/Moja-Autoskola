type InstructorSlot = {
    id: string;
    instructorId: string;
    startTime: Date;
    endTime: Date;
};

type AddInstructorSlotReq = {
    instructorId: string;
    startTime: Date;
    endTime: Date;
};

export type { InstructorSlot, AddInstructorSlotReq };
