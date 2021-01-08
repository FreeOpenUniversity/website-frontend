import React from "react";
import { Link } from "react-router-dom";
import { SubCategoryData } from "./SubCategoryData";

import "./Navbar.css";

export const SubCategory = () => {
  return (
    <>
      <div className="pa4 bg-white shadow-5 fl w-50-l visibility-hidden absolute black">
        <div className="pb2 flex mb2 bb bw1 justify-between items-center">
          <h2 className= "dib w-75-ns">Categories</h2>
          <button className="avenir fw5 f5-ns f4-l link dim br-pill bn ph4 dib mv3-l h3-l h-50-ns bg-near-white">
            View all
          </button>
        </div>

        {SubCategoryData.map((item, index) => {
          return (
            <ul key={index}>
              <li className="list fl w-25 pa2 v-mid ">
                <Link to={{ pathname: item.path, state: { id: item.title } }}>
                  <div className="link black hover-green hover-animate  ">
                    {item.title}
                  </div>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};
