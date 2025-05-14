import { API_ENDPOINTS } from "@/constants";
import { AddInstructorSlotReq } from "@/types";
import { postData } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const usePostInstructorSlot = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation<
        any,
        AxiosError,
        AddInstructorSlotReq
    >({
        mutationFn: (newSlot: AddInstructorSlotReq) =>
            postData(API_ENDPOINTS.INSTRUCTOR.SLOT, newSlot),
        onSuccess: () => {
            toast.success("Session successfully created");
            queryClient.invalidateQueries({
                queryKey: ["instructor-slot"],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { addInstructorSlot: mutate, isPending };
};

export default usePostInstructorSlot;
