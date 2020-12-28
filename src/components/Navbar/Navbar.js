import React from "react";
import { Link } from "react-router-dom";

import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import "./Navbar.css";
import { SubCategory } from "./SubCategory";

export const Navbar = ({ signedIn }) => {
  signedIn = false;
  const className = "link white hover-green hover-animate h2 pl4  ";
  const UserControls = () => {
    return signedIn ? (
      <div className={className}>
        <UserDropdownMenu />
      </div>
    ) : (
      <div className="ml-auto">
        <Link className={className} to="#">
          Sign In
        </Link>
        <Link className={className} to="/my-classes">
          My Classes
        </Link>
      </div>
    );
  };

  return (
    <div className="w-100 fw5 f4 h-auto bg-dark-blue ph4 bb bw1 flex items-center avenir">
      <div className="link white hover-green hover-animate dropdown">
        <p className="">Category</p>
        <SubCategory />
      </div>
      <UserControls />
    </div>
  );
};
