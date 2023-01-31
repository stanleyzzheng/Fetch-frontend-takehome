import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function SuccessPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) navigate("/");
  }, []);

  const handleButton = () => {
    navigate("/");
  };
  return state ? (
    <div>
      <h1>Success!</h1>
      <p>id: {state.id}</p>
      <button className="btn" onClick={handleButton}>
        Go back
      </button>
    </div>
  ) : (
    ""
  );
}

export default SuccessPage;
