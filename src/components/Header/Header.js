import React from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import { FaBorderNone } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="">
      <div className="bg-light-silver w-100">
        <div className="pa4 mh5 mh2-m flex items-center">
          <Link to="/">
            <img
              id="CIS-logo"
              className="w3 h3 pr2 br link hover-black"
              src={logo}
              alt="School of Collegiate Independent Study"
            />
          </Link>
          <span className="avenir f3 f5-m ttc pl2 fw6">
            Collegiate Independent Study
          </span>
          <span className="dib pl5 dn-m">
            <SearchBar />
          </span>
          <span className="pl2">
            <DropdownMenu />
          </span>
        </div>
      </div>
      <div className="dn dib-m bg-dark-gray pa2 w-100">
        <SearchBar />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
