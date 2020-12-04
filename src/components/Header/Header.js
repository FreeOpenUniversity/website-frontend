import React from "react";
import HeadBgImg from "../../Images/HeadBgImg.jpg";
import logo from "../../Images/logo.png";
import { SearchBar } from "../../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Header() {
  return (
    <div className="">
      <div className=" bg-gray w-100">
        <div className="pa4 mh5 flex items-center">
          <img
            id="CIS-logo"
            className="w-13 h3 pr2 br"
            src={logo}
            alt="School of Collegiate Independent Study"
          />
          <span className="avenir f3 ttc pl1 fw6">
            Collegiate Independent Study
          </span>
          <span className="dib pl6">
            <SearchBar />
          </span>
          <span className="">
            <DropdownMenu />
          </span>
        </div>
      </div>
      <Navbar />
      <img
        className="ma0 vh-75 w-100"
        src={HeadBgImg}
        alt="Collegiate Independent Study"
      />
      <span className="dib pl7">
        <SearchBar />
      </span>
    </div>
  );
}

export default Header;
