import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import data from "../../MOCK_DATA.json";
import { SubCategoryData } from "./SubCategoryData";

import "./Navbar.css";
import { useSelector } from "react-redux";

export const SubCategory = () => {
  const categories = useSelector((state) => state.category);

  return (
    <>
      <div className=" flex flex-column flex-wrap-ns ph3  bg-dark-blue w-75-ns">
        <div className=" flex flex-column flex-row-ns flex-wrap-ns w-100   ">
          {SubCategoryData.slice(0, 16).map((item, index) => {
            return (
              <ul key={index} className="fw4 f4 pa2 ph4 ">
                <li className="list pl3 v-mid ">
                  <Link to={{ pathname: item.path, state: { id: item.title } }}>
                    <div className="link no-underline black hover-green hover-animate white w-100 ">
                      {item.title}
                    </div>
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};
