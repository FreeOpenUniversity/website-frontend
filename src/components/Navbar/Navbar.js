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
        {/* <div> */}
        <ul>
          <div className="nav_bar_content_main avenir">
            <Link to="#">
              <img src={logo} height="50px" />
            </Link>

            <Link
              to="#"
              className="link white hover-green hover-animate dropdown"
            >
              <p>Categories</p>
              <SubCategory />
            </Link>
            <Link to="#" className="link white hover-green hover-animate">
              <p>Subject</p>
            </Link>
            <Link to="#" className="link white hover-green hover-animate">
              <p>For Study</p>
            </Link>
            <Link to="#" className="link white hover-green hover-animate">
              <p>Others</p>
            </Link>
          </div>

          <div className="nav_bar_content_side">
            <SearchBar />
            <button className="button">Register</button>
            {/*convert into a button component */}
          </div>
        </ul>
      </div>

      {/* button to login to online campus */}
    </div>
  );
};
// export default NavBar;
