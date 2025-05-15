import useSchoolByUserId from "@/api/school/useSchoolByUserId";
import { useAuth } from "@/hooks";

export const useSchoolId = () => {
  const { user } = useAuth();
  const { school } = useSchoolByUserId(user?.id || "");
  return school?.id;
};
