import { API_ENDPOINTS } from "@/constants";
import { EnrollmentPatchRequest } from "@/types/enrollmentPatchRequest";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";
import { patchData } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useUpdateEnrollmentRequest = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation<
    any,
    AxiosError,
    EnrollmentPatchRequest
  >({
    mutationFn: (updatedEnrollment) => {
      return patchData(`${API_ENDPOINTS.ENROLLMENT.CRUD}`, updatedEnrollment);
    },
    onSuccess: () => {
      toast.success("Zahtjev uspješno prihvaćen");
      queryClient.invalidateQueries({
        queryKey: ["school-enrollments", EnrollmentStatus.Pending],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateEnrollmentRequest: mutate, isPending };
};

export default useUpdateEnrollmentRequest;
