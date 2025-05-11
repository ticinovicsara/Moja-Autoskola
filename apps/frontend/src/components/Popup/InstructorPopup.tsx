import { PopupProp } from "./PopupProp";

export const InstructorPopup = ({ onClose }: PopupProp) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose}>Zatvori</button>
        <h2>Rezerviraj termin za predavanje</h2>
        <p>Instructor popup</p>
      </div>
    </div>
  );
};
