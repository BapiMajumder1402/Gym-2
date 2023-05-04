import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const navigate = useNavigate();
  let login = JSON.parse(localStorage.getItem("isLogin"));
if (!login) {
  navigate("/Login");
}
  
  return (
    <div>
      <props.Cmp />
    </div>
  );
}
