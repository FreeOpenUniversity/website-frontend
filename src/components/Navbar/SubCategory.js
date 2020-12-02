import React from "react";
import { Link } from "react-router-dom";
import { SubCategoryData } from "./SubCategoryData";

import "./Navbar.css";

export const SubCategory = () => {
  return (
    <>
      <div className="sub_nav_bar">
        <div className="sub_nav_bar_top ">
          <h2>Catagory</h2>
          <button className="fw5 avenir pa3 br-pill b-dark-green bw0 ">
            View all category
          </button>
        </div>

        {/* <div className="sub_nav_bar_bottom"> */}
        {SubCategoryData.map((item, index) => {
          return (
            <li key={index} className={item.title}>
              <Link to={item.path}>
                <div>{item.title}</div>
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};
