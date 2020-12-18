import React from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import { FaBorderNone } from "react-icons/fa";

function Header() {
  return (
    <div className="">
      <div className="bg-light-silver w-100">
        <div className="pa4 mh5 mh2-m flex justify-between bg-aqua">
          <div className="flex items-center">
            <img
              id="CIS-logo"
              className="w3 h3 pr3 br self-start"
              src={logo}
              alt="School of Collegiate Independent Study"
            />
            <span className="avenir f3 f5-m ttc pl3 fw6">
              Collegiate Independent Study
            </span>
            <span className="dib pl5 dn-m">
              <SearchBar />
            </span>
          </div>
          <DropdownMenu />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
