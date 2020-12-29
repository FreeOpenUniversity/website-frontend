import React from "react";

export function Book({ data }) {
  const { title, author, id, link, category, ip_address } = data;
  const isAPI = !ip_address;
  const dummyImg = "https://dummyimage.com/600x400/00ff40/fafafa";
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
        <div className="i ttc">{author}</div>
      </div>
      <img
        src={isAPI ? dummyImg : link}
        alt={`Cover of ${title}`}
        srcSet=""
        className="h4 w4 db center mb3"
      />
      <a href={link} download className="f3 link orange dim">
        Download
      </a>
      <div className="f6">
        {isAPI ? "Provided by Backend API" : "Provided by MOCK_DATA"}
      </div>
    </div>
  );
}
