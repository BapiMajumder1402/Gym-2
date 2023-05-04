import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import style from './Login.module.css';
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [gymData, setGymData] = useState([]);

  const getRegister = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("gymUsers");
    console.log(getUserArr);

    const { email, password } = inputValue;

    if (email === "") {
      Swal.fire("E-mail field is required");
    } else if (!email.includes("@") || !email.endsWith(".com")) {
      Swal.fire("Please enter a valid email address");
    } else if (password === "") {
      Swal.fire("Password field is required");
    } else if (password.length < 5) {
      Swal.fire("Password size must be greater than Five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userArr = JSON.parse(getUserArr);
        const user = userArr.find(
          (item, ind) => item.email === email && item.password === password
        );
        if (user) {
          Swal.fire("Login Successful", "You clicked the button!", "success");

          localStorage.setItem("isLogin", JSON.stringify("true"));
          navigate("/");
        } else {
          Swal.fire("Login Failed");
        }
      } else {
        Swal.fire("Login Failed");
      }

      localStorage.setItem("Users_login", JSON.stringify(getUserArr));
    }
  };


  return (
    <div className={style.container}>
      <h1 className={style.para}>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            onChange={getRegister}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            onChange={getRegister}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          // variant="primary"
          type="submit"
          onClick={handleSubmitData}
        >
          Submit
        </Button>
        <p className={style.para}>
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </p>
      </Form>
    </div>
  );
};
