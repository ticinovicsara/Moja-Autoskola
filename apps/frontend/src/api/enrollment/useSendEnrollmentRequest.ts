import { API_ENDPOINTS, routes } from "@/constants";
import { EnrollmentPostRequest } from "@/types/enrollmentPostRequest";
import { postData } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSendEnrollmentRequest = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<
    any,
    AxiosError,
    EnrollmentPostRequest
  >({
    mutationFn: (newEnrollment: EnrollmentPostRequest) =>
      postData(API_ENDPOINTS.ENROLLMENT.CRUD, newEnrollment),
    onSuccess: () => {
      toast.success("Prijava uspješno poslana");
      queryClient.invalidateQueries({ queryKey: ["enrollment"] });

      navigate(routes.WAITING_FOR_APPROVE);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { sendEnrollmentRequest: mutate, isPending };
};

export default useSendEnrollmentRequest;
