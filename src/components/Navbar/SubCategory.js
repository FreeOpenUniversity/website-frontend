import React from "react";
import { Link } from "react-router-dom";
import { SubCategoryData } from "./SubCategoryData";

import "./Navbar.css";

export const SubCategory = () => {
  return (
    <>
      <div className="pa4 bg-white shadow-5 fl w-50-l visibility-hidden absolute black">
        <div className="pb4 flex mb2 w-100 bb bw1 justify-between ">
          <h2>Catagory</h2>
          <button className="fw5 avenir pa3 br-pill b-dark-green bw0 ">
            View all category
          </button>
        </div>

        {SubCategoryData.map((item, index) => {
          return (
            <li key={index} className={item.title}>
              <Link to={item.path} className="fl w-25-l pa2 v-mid ">
                <div>{item.title}</div>
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};
