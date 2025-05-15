export type InstructorSlot = {
    id: string;
    instructorId: string;
    startTime: Date;
    endTime: Date;
};

export type AddInstructorSlotReq = {
    instructorId: string;
    startTime: Date;
    endTime: Date;
};
