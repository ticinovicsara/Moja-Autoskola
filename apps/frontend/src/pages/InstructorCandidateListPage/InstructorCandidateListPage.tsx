import { useState } from "react";

const InstructorCandidateListPage = () => {
  const candidates = [
    { id: 1, name: "Ana Kovač", image: "/api/placeholder/40/40" },
    { id: 2, name: "Antonio Milić", image: "/api/placeholder/40/40" },
    { id: 3, name: "Dario Kralj", image: "/api/placeholder/40/40" },
    { id: 4, name: "Ema Belić", image: "/api/placeholder/40/40" },
    { id: 5, name: "Iva Šimić", image: "/api/placeholder/40/40" },
    { id: 6, name: "Ivan Horvat", image: "/api/placeholder/40/40" },
    { id: 7, name: "Josip Pavlović", image: "/api/placeholder/40/40" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <div className="logo">A</div>
        <button className="menu-button">
          <div className="menu-icon">≡</div>
        </button>
      </header>

      <div className="navigation">
        <button className="back-button">
          <span>←</span>
        </button>
        <h1 className="page-title">LISTA KANDIDATA</h1>
      </div>

      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Pronađi kandidata"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <span>🔍</span>
          </button>
        </div>
      </div>

      <div className="candidates-list">
        {filteredCandidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <img
              src={candidate.image}
              alt={candidate.name}
              className="candidate-avatar"
            />
            <div className="candidate-name">{candidate.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCandidateListPage;
