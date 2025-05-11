import { PopupProp } from "./PopupProp";

export const CandidatePopup = ({ onClose }: PopupProp) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose}>Zatvori</button>
        <h2>Rezerviraj termin za vožnju</h2>
        <p>Candidate popup</p>
      </div>
    </div>
  );
};
