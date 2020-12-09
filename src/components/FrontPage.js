import React from "react";
import { SearchBar } from "./SearchBar";
import { CategoryScroller } from "./CategoriesScroller";
import Footer from "./Footer";
import data from "../MOCK_DATA.json";
import _ from "lodash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Header from "./Header/Header";
import frontpgImg from "./frontpgImg.svg";

export const FrontPage = () => {
  const background = {
    backgroundImage: `url(${frontpgImg})`,
  };
  return (
    <div className="avenir">
      <header>
        <Header />
      </header>
      <div style={background} className="cover bg-near-white vh-75"></div>
      <CategoryScroller
        categories={_.uniq(
          data
            .map(({ category }) => category)
            .filter((cat) => !cat.includes("|"))
        ).map((name) => ({ name }))}
      />
      <br />
      <Footer />
    </div>
  );
};
