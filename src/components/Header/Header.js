import React from "react";
import HeadBgImg from "./HeadBgImg.jpg";
import logo from "../../Images/logo.png";
import { SearchBar } from "../../SearchBar";
import { Navbar } from "../Navbar/Navbar";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./header.css";

function Header() {
  return (
    <div className="">
      <div className=" bg-light-silver w-100">
        <div className="pa3 mh5 flex items-center">
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

      <img src={HeadBgImg} className="vh-50 w-100" />
    </div>
  );
}

export default Header;
