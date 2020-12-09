import React from "react";
import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _ from "lodash";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import frontpgImg from "../Images/frontpgImg.svg";

export const FrontPage = () => {
  const background = {
    backgroundImage: `url(${frontpgImg})`,
  };
  return (
    <div className="avenir">
      <header>
        <Header />
      </header>
      <div
        style={background}
        className="cover bg-near-white mw-100 vh-75"
      ></div>
      <CategoryScroller
        categories={_.uniq(
          data
            .map(({ category }) => category)
            .filter((cat) => !cat.includes("|"))
        ).map((name) => ({ name }))}
      />
      <br />
    </div>
  );
};
