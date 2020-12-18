import React from "react";
import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _ from "lodash";
import frontpgImg from "../Images/frontpgImg.svg";

export const FrontPage = () => {
  const background = {
    backgroundImage: `url(${frontpgImg})`,
  };
  return (
    <div className="avenir">
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
