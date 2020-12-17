import React, { memo } from "react";
import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _ from "lodash";
import frontpgImg from "../Images/frontpgImg.svg";
import { api } from "../store";
import { connect } from "react-redux";

const frontPage = (props) => {
  console.log(props);
  !props.category && api.category.read();
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
export default connect((state) => state, {})(frontPage);

console.log(connect((state) => state, {})(frontPage));
