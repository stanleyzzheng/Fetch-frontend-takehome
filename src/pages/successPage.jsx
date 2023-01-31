import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SuccessPage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.id) navigate("/");
  });
  return <div>id: {props.id}</div>;
}

export default SuccessPage;
