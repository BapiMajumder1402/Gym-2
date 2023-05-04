import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const navigate = useNavigate();
  let login = localStorage.getItem("isLogin");
  useEffect(() => {
    if (!login) {
      navigate("/Login");
    }
  }, [login]);

  return (
    <div>
      <props.Cmp />
    </div>
  );
}
