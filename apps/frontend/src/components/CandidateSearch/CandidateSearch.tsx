import { InputFieldWithFilter } from "@/components";
import CandidateList from "../CandidateList/CandidateList";
import { User } from "@/types";

interface CandidateSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  candidates: User[];
  onCandidateSelect?: (candidate: User) => void;
  returnMessage: string;
}

const CandidateSearch = ({
  searchTerm,
  onSearchChange,
  candidates,
  onCandidateSelect,
  returnMessage,
}: CandidateSearchProps) => {
  const filteredCandidates = searchTerm
    ? candidates.filter((candidate) => {
        const fullName =
          `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
      })
    : candidates;

  return (
    <div>
      <InputFieldWithFilter
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        searchTitle="Pretraži kandidate"
      />
      {filteredCandidates.length > 0 ? (
        <CandidateList
          candidates={filteredCandidates}
          onClick={onCandidateSelect}
        />
      ) : (
        <p style={{ marginLeft: "2em" }}>{returnMessage}</p>
      )}
    </div>
  );
};

export default CandidateSearch;
