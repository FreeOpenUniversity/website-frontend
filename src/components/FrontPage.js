import React, { memo } from "react";
import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _, { isEmpty } from "lodash";
import frontpgImg from "../Images/frontpgImg.svg";
import { api } from "../store";
import { connect } from "react-redux";
import HomepageIntro from "./Intro";

const frontPage = (props) => {
  isEmpty(props.categories) && api.category.read();
  const background = {
    backgroundImage: `url(${frontpgImg})`,
  };

  return (
    <div className="avenir">
      {/* <div
        style={background}
        className="cover bg-near-white mw-100 vh-75"
      ></div> */}
      <h1 className="tc ttu f1 fw9 tracked-tight">
        Welcome to Collegiate Independent Study
      </h1>
      <div className="tc">
        <img
          src={frontpgImg}
          alt="front page header"
          className="center vh-75"
        />
      </div>
      <HomepageIntro />
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
