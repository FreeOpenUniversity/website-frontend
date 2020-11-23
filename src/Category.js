import React from "react";
import data from "./MOCK_DATA.json";

/**
 *
 * @typedef {{title:string,link:string,author:string,level:string,category:string}} book
 */
/**
 *
 * @param {{book:book}} param0
 */
function Book({ book, key }) {
  const { title, author, link: download, category } = book;
  const cutLength = 24;
  return (
    <div
      key={key}
      className="br2 ba blueprint-blue b--black-10 mv4 w-100 w-50-m w-25-l mw5 mr2 fl"
    >
      <div className="h4 f2 fw5 tc">
        {title.length > cutLength ? title.slice(0, cutLength) + "..." : title}
      </div>
      <span className="i f5">{author}</span>
      <img src={download} alt="" srcset="" className="h4 w4 db" />
    </div>
  );
}

export function Category(props) {
  const catName = props.location.state.name;

  return (
    <div className="ml2 w-75 center">
      <div className="f1 tc mt3 ttc blueprint-blue">{catName}</div>
      {data
        .filter(({ category }) => {
          return category === catName;
        })
        .slice(0, 20)
        .map((book, key) => Book({ book, key }))}
    </div>
  );
}
