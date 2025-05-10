interface MyPopupProps {
  onClose: () => void;
}

const Popup = ({ onClose }: MyPopupProps) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose}>Zatvori</button>
        <h2>Rezervacija termina</h2>
      </div>
    </div>
  );
};

export default Popup;
