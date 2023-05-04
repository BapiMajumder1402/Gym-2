import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
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
        <NavLink to="/login" className={style.joinbtn}>
          Join us
        </NavLink>
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
