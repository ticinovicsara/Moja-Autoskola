import { useAuth } from "@/hooks";
import c from "./schoolAdmin.module.css";
import Arrow from "@/assets/svgs/Arrow2.svg";
import { useCandidatesBySchoolId } from "@/api";
import useSchoolByUserId from "@/api/school/useSchoolByUserId";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
export const SchoolAdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { school, isLoading: loadingSchool } = useSchoolByUserId(
    user?.id || ""
  );

  const schoolId = school?.id;

  const { candidates, isLoading: loadingCandidates } =
    useCandidatesBySchoolId(schoolId);

  if (loadingSchool || (schoolId && loadingCandidates)) {
    return <div>Loading...</div>;
  }

  if (!schoolId) {
    return <div>No school assigned.</div>;
  }

  const MAX_CANDIDATES = 50;
  const numCandidates = candidates?.length || 0;
  const percentFull = Math.min((numCandidates / MAX_CANDIDATES) * 100, 100);

  const handleOpenRequests = () => {
    navigate(routes.PENDING_LIST, { state: { schoolId } });
  };
  return (
    <div className={`${c.adminDashboard} container`}>
      <div className={c.greeting}>
        <p>Pozdrav,</p>
        <h1>{user?.firstName.toUpperCase()}</h1>
      </div>
      <div className={c.cards}>
        <div className={c.candidateNum}>
          <p>Broj kandidata: </p>
          <div className={c.candidateBar}>
            <h3>
              {numCandidates}/{MAX_CANDIDATES}
            </h3>
            <div
              className={c.progressBar}
              style={{ width: `${percentFull}%` }}
            ></div>{" "}
          </div>
        </div>

        <div className={c.assign}>
          <p>DODIJELI INSTRUKTORA KANDIDATU</p>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className={c.approve} onClick={handleOpenRequests}>
          <p>ODOBRI ZAHTJEVE ZA UPIS</p>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
