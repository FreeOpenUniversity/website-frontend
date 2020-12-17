import React, { memo } from "react";
import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _, { isEmpty } from "lodash";
import frontpgImg from "../Images/frontpgImg.svg";
import { api } from "../store";
import { connect } from "react-redux";

const frontPage = (props) => {
  isEmpty(props.categories) && api.category.read();
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
export default connect(
  (state) => ({ categories: state.category }),
  {}
)(frontPage);
