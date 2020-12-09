import React from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FaBorderNone } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <div className="bg-light-silver w-100">
        <div className="pa3 mh5 mh2-m flex items-center">
          <img
            id="CIS-logo"
            className="w3 h3 pr2 br"
            src={logo}
            alt="School of Collegiate Independent Study"
          />
          <span className="avenir f3 f5-m ttc pl1 fw6">
            Collegiate Independent Study
          </span>
          <span className="dib pl6 dn-m">
            <SearchBar />
          </span>
          <span>
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
