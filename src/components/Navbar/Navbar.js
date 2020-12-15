import React from "react";
import { Link } from "react-router-dom";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import "./Navbar.css";
import { SubCategory } from "./SubCategory";

export const Navbar = ({ signedIn }) => {
  signedIn = false;

  const UserControls = () => {
    const className = "ml-auto link white hover-green hover-animate h2";
    return signedIn ? (
      <div className={className}>
        <UserDropdownMenu />
      </div>
    ) : (
      <Link className={className} to="#">
        Sign In
      </Link>
    );
  };

  return (
    <div className="w-100 fw5 f4 h-auto bg-dark-blue pa2 bb bw1 flex items-center avenir">
      <div className="link white hover-green hover-animate dropdown">
        <p className="pa2">Category</p>
        <SubCategory />
      </div>
      <UserControls />
    </div>
  );
};
