import { values } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";

/**
 *
 * @typedef {{title:string,link:string,author:string,level:string,category:string}} book
 */
/**
 *
 * @param {{book:book}} param0
 */
export function Book({ book, key, pathname }) {
  const { title, author, link: download, id } = book;
  const cutLength = 24;
  return (
    <div
      key={key}
      className="br2 ba dark-gray b--black-10 mv3 w-100 w-50-m w-30-l mw5 mr3 pa2 tc"
    >
      <Link
        to={{ pathname: pathname + `/book/` + id, state: { id } }}
        className="link dim"
      >
        <div className="h4 f2 fw5 tc">
          {title.length > cutLength ? title.slice(0, cutLength) + "..." : title}
        </div>
        <span className="i f5 tc">{author}</span>
        <img src={download} alt="" className="h4 w4 db center" />
      </Link>
    </div>
  );
}

function category(props) {
  const catName = props.match.params.name;

  return (
    <>
      <div className="f1 tc mt3 ttc">{catName}</div>
      <div className="w-75 center flex flex-wrap justify-center">
        {data
          .filter((book) => {
            return book.category.toLowerCase() === catName.toLowerCase();
          })
          .slice(0, 20)
          .map((book, key) =>
            Book({ book, key, pathname: props.location.pathname })
          )}
      </div>
    </>
  );
}

export const Category = connect(
  (state) => ({ categories: state.category, books: values(state.book) }),
  {}
)(category);
