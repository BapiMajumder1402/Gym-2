import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const user = localStorage.getItem("isLogin")
  const [showNavbar, setShowNavbar] = useState(true);
  function logout() {
    localStorage.removeItem("isLogin");
  }
  return (
    <div className={style.container}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp88Zh51g85sqvYiHCsRz4dkdXcq64OaaiUQ&usqp=CAU" />
          <h3>OXYGEN GYM</h3>
        </div>
      </NavLink>
      <div className={showNavbar ? style.navlist : style.mobileView}>
        <NavLink to="/" className={style.item}>
          Home
        </NavLink>
        <NavLink to="/aboutus" className={style.item}>
          AboutUs
        </NavLink>
        <NavLink to="/program" className={style.item}>
          Program
        </NavLink>
        <NavLink to="/training" className={style.item}>
          Training
        </NavLink>
        <NavLink to="/pricing" className={style.item}>
          Pricing
        </NavLink>
        <button onClick={()=>logout()} className={style.joinbtn}>
          {user ? "Logout" : "JoinUs"}
        </button>
      </div>
      <button
        onClick={() => setShowNavbar(!showNavbar)}
        className={style.closebtn}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
