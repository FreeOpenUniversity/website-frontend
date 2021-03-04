import React from "react";
import logo from "../../Images/logo.png";
import { SearchBar } from "../Searchbar";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-white w-100">
        <div className="pa4 mh5 mh2-m flex items-center justify-between">
          <Link to="/" className="black no-underline flex items-center">
            <img
              id="CIS-logo"
              className="w3 h3 pr2 br"
              src={logo}
              alt="School of Collegiate Independent Study"
            />
            <span className="f3 b i f5-m ttc pl2 fw7">
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
