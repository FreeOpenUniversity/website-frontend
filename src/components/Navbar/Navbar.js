import React from "react";
<<<<<<< HEAD
import { SearchBar } from "../../SearchBar";
import { Link } from "react-router-dom";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
=======
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";

>>>>>>> i8Header
import "./Navbar.css";

import logo from "./freeopenu88.png";
import { SubCategory } from "./SubCategory";

<<<<<<< HEAD
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
      <Link to="#">
        <img src={logo} height="60px" />
      </Link>
      <Link to="#" className="link white hover-green hover-animate dropdown">
        <p className="pa2">Category</p>
        <SubCategory />
      </Link>
      <SearchBar className="fr" />
      <UserControls />
=======
export const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="nav_bar_content">
        <ul>
          <div className="nav_bar_content_main avenir">
            <Link
              to="#"
              className="link white hover-green hover-animate dropdown"
            >
              <p>Category</p>
              <SubCategory />
            </Link>

            <Link to="#" className="link white hover-green hover-animate">
              <p>Subjects</p>
            </Link>
            <Link to="#" className="link white hover-green hover-animate">
              <p>For Study</p>
            </Link>
            <Link to="#" className="link white hover-green hover-animate">
              <p>Others</p>
            </Link>
          </div>

          <div className="nav_bar_content_side">
            <button className="button bg-green">Sign In / Register</button>
            {/*convert into a button component */}
          </div>
        </ul>
      </div>

      {/* button to login to online campus */}
>>>>>>> i8Header
    </div>
  );
};
