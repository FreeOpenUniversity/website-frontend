import React, { lazy, Suspense } from "react";
// import { CategoryScroller } from "./CategoriesScroller";
import data from "../MOCK_DATA.json";
import _ from "lodash";
import frontpgImg from "../Images/frontpgImg.svg";
import { api } from "../store";
import { connect } from "react-redux";
import HomepageIntro from "./Intro";

const CategoryScroller = lazy(() => import("./CategoriesScroller"));

const frontPage = () => {
  api.category.read();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="avenir">
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
    </Suspense>
  );
};

export default connect(
  (state) => ({ categories: state.category }),
  {}
)(frontPage);
