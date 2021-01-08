import React from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import { FaBorderNone } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-light-silver w-100">
        <div className="pa4 mh5 mh2-m flex items-center">
          <Link to="/" >
            <img
              id="CIS-logo"
              className="w3 h3 pr2 br link hover-black"
              src={logo}
              alt="School of Collegiate Independent Study"
            />

          </Link>
          
          <Link className="no-underline" to="/">
            <span className="no-underline black  f3 f5-m ttc pl2 fw7">
              Collegiate Independent Study
            </span>
          </Link>
          <span className="dib pl7 dn-m">
            <SearchBar />
          </span>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
