import React from "react";
import { SearchBar } from "../../SearchBar";
import { Link } from "react-router-dom";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import "./Navbar.css";

import logo from "./freeopenu88.png";
import { SubCategory } from "./SubCategory";

export const Navbar = () => {
  return (
    <div className="w-100 fw5 f4 h-auto bg-dark-blue pa2 bb bw1 v-mid avenir flex">
      <Link to="#">
        <img src={logo} height="60px" />
      </Link>
      <Link to="#" className="link white hover-green hover-animate dropdown">
        <p>Category</p>
        <SubCategory />
      </Link>
      <SearchBar className="fr" />
      <div className="ml-auto">
        <Link to="#" className="link white hover-green hover-animate ">
          Sign In / Register
        </Link>
        <UserDropdownMenu />
      </div>
    </div>
  );
};
