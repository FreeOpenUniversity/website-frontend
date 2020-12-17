import React from "react";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";
import * as BsIcons from "react-icons/bs";
/**
 *
 * @typedef {{title:string,link:string,author:string,level:string,category:string}} book
 */
/**
 *
 * @param {{book:book}} param0
 */
export function Book({ book, key }) {
  const { title, author, link: download, category, id } = book;
  const cutLength = 24;
  return (
    <div
      key={key}
      className="br2 ba shadow-4 dark-gray b--black-10 mv3 w-100 w-50-m w-30-l mw5 mr3 pa2 tc"
    >
      <Link
        to={{ pathname: `/book/` + id, state: { id } }}
        className="link dim"
      >
        <img src={download} alt="" srcset="" className="h4 w-100 db center" />
        <div className="pb2 pt3  f4 fw5 tc black">
          {title.length > cutLength ? title.slice(0, cutLength) + "..." : title}
        </div>
        <span className="i f5 tc black">by {author}</span>
        <p className="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="pt2 bt bw1 f3 dark-green">
          <BsIcons.BsBookHalf />
        </div>
      </Link>
    </div>
  );
}

export function Category(props) {
  const catName = props.location.state.name;

  return (
    <>
      <div className="f1 tc mt3 ttc">{catName}</div>
      <div className="w-75 center flex flex-wrap justify-center">
        {data
          .filter(({ category }) => {
            return category === catName;
          })
          .slice(0, 20)
          .map((book, key) => Book({ book, key }))}
      </div>
    </>
  );
}
