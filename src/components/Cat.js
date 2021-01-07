import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Book({ book }) {
  const { title, author, link, id, imageId } = book;
  const cutLength = 24;
  const [cover, setCover] = useState({});
  useEffect(() => {
    fetch(`http://66.76.242.195:8180/image/${imageId}`)
      .then((res) => res.text())
      .then((result) => setCover(result.imageData));
  });
  return (
    <div className="br2 ba dark-gray b--black-10 mv3 w-100 w-50-m w-30-l mw5 mr3 pa2 tc">
      <Link
        to={{ pathname: `/book/` + id, state: { id } }}
        className="link dim"
      >
        <div className="h4 f2 fw5 tc">
          {title.length > cutLength ? title.slice(0, cutLength) + "..." : title}
        </div>
        <span className="i f5 tc">{author}</span>
        <img src={cover} alt="" srcSet="" className="h4 w4 db center" />
      </Link>
    </div>
  );
}

export default function Cat({ data }) {
  const { id, name, imageId, books } = data ? data : [];

  return (
    <>
      <div className="f1 tc mt3 ttc">Cat {id}</div>
      <div className="w-75 center flex flex-wrap justify-center">
        {books &&
          books
            .sort((a, b) => parseInt(a.id) - parseInt(b.id))
            .map((book, index) => <Book book={book} key={index} />)}
      </div>
    </>
  );
}
