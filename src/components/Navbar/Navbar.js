import React from "react";
import { SearchBar } from "../../SearchBar";
import { Link } from "react-router-dom";

import "./Navbar.css";

import logo from "./freeopenu88.png";
import { SubCategory } from "./SubCategory";

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
    </div>
  );
};
