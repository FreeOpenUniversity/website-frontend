import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import data from "../../MOCK_DATA.json";
import { SubCategoryData } from "./SubCategoryData";

import "./Navbar.css";
import { useSelector } from "react-redux";

export const SubCategory = () => {
  const categories = useSelector((state) => state.category);

  const lala = _.uniqBy(
    data
      .map(({ category }) => category)
      .filter((cat) => !cat.includes("|"))
      .map((name) => ({ name }))
  );
  console.log(lala);

  // <div className="pa4 bg-white shadow-5 fl w-50-l visibility-hidden absolute black">
  //     <div className="pb2 flex mb2 bb bw1 justify-between items-center">
  //       <h2 className="dib w-75-ns">Categories</h2>
  //       <button className="avenir fw5 f5-ns f4-l link dim br-pill bn ph4 dib mv3-l h3-l h-50-ns bg-near-white"></button>
  // pa4 bg-white shadow-5 fl w-100 h-100 absolute top-20 left-0 black
  return (
    <>
      <div className=" flex flex-column flex-wrap-ns ph3  bg-dark-blue w-75-ns">
        <div className=" flex flex-column flex-row-ns flex-wrap-ns w-100   ">
          {SubCategoryData.slice(0, 10).map((item, index) => {
            return (
              <ul key={index} className="fw4 f4 pa2 ph4 ">
                <li className="list pl3 v-mid ">
                  <Link to={{ pathname: item.path, state: { id: item.title } }}>
                    <div className="link black hover-green hover-animate white w-100 ">
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
