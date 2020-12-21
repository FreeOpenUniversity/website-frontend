import React from "react";
import { Link } from "react-router-dom";

export function Book({ data }) {
  const { title, author, id, link, category } = data;
  // title
  // description
  // ratings
  // author
  // id
  // download link
  // category
  return (
    <div className="center tc items-center justify-center pa4 bg-gray w-50 min-vh-100">
      <div className="mb4">
        <div className="f1">{title}</div>
        <div className="i">{author}</div>
      </div>
      <img
        src={link}
        alt={`Cover of ${title}`}
        srcSet=""
        className="h4 w4 db center mb3"
      />
      <a href={link} download className="f3 link orange dim">
        Download
      </a>
    </div>
  );
}
