import React, { useState } from "react";
import Popup from './../design/PopUp';

const Testaja = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePrimaryClick = () => {
    console.log("Primary button clicked");
    setShowPopup(false);
  };

  const handleSecondaryClick = () => {
    console.log("Secondary button clicked");
    setShowPopup(false);
  };

  const handleFinalyClick = () => {
    console.log("Finaly button clicked");
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Popup
      </button>

      {showPopup && (
        <Popup type="success" judul="Success!" pesan="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btnPrimary="Confirm" btnSecondary="Edit" btnFinaly="Cancel"
          primary={true}
          secondary={true}
          finaly={true}
          onPrimary={handlePrimaryClick}
          onSecondary={handleSecondaryClick}
          onFinaly={handleFinalyClick}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Testaja;
