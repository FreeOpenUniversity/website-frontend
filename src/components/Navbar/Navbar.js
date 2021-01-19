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
        <Link className={className} to="./signup">
          Sign up/Login
        </Link>
      </div>
    );
  };

  return (
    <div className="w-100 fw5 f4 h-auto bg-dark-blue bb bw1 flex items-center avenir">
      <div className="link w3 center white hover-green hover-animate dropdown">
        <p>Category</p>

        <SubCategory />
      </div>
      <div className="w-auto center">
        <UserControls />
      </div>
    </div>
  );
};
