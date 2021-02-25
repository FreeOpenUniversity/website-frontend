import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [hamburgerIsClicked, setHamberger] = useState(false);

  function toggleState(stateSetter) {
    stateSetter((prev) => {
      return !prev;
    });
  }

  const Hamburger = () => {
    return hamburgerIsClicked ? (
      <div className="menu_btn_checked ">
        <div className="menu_icon--line"></div>
      </div>
    ) : (
      <div className="menu_icon">
        <span className="menu_icon--line"></span>
      </div>
    );
  };

  return (
    <>
      <div className=" w-100 bg-white fixed top-0 left-0 z-index-100">
        <div className="pa2  mh5-ns mh2-m flex items-center justify-between">
          <Link to="/" className="link black flex items-center w-100 h-100">
            <div className="w-50 ml3 w3-ns mw-100 pr2-ns br-ns">
              <img
                id="CIS-logo"
                className=""
                src={logo}
                alt="School of Collegiate Independent Study"
              />
            </div>

            <div className="f3 dn db-ns b i f5-m ttc pl2 fw7 avenir">
              Collegiate Independent Study
            </div>
          </Link>
          <span className="dib pl7 dn-m">{/* <SearchBar /> */}</span>
        </div>

        <div
          onClick={() => {
            toggleState(setHamberger);
          }}
        >
          <Hamburger />
        </div>

        {hamburgerIsClicked && <Navbar />}
      </div>
    </>
  );
}

export default Header;
