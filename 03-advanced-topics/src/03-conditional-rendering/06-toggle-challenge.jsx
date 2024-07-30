import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  }

  return (
    <div>
      <button className='btn' onClick={toggleAlert}>toggle</button>
      {showAlert && <div className='alert alert-danger'>hello world</div>}
    </div>
  );
};

export default ToggleChallenge;
