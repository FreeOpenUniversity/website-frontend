import React from "react";
import "./classList.css";

function ClassList(data) {
  return (
    <div className="w-two-thirds bw1 br4 card tc center bw1 bn black-80 mv3 sans-serif bg-white">
      <div className="flex">
        <img
          src={data.imgLink}
          style={{ resizeMode: "cover" }}
          className="db w-20 dn-m br4 br--left br--top"
          alt={data.imgAlt}
        />
        <article>
          <h1 className="ma0 pt1 f3">{data.title}</h1>
          <hr className="w-80" />
          <p className="f6 lh-copy mb0">{data.desc}</p>
        </article>
      </div>
      <div className="hidden pt2">
        <div className="br-pill bg-white center">
          <progress
            className="w-70 h2"
            value={data.progress * 100}
            max="100"
          ></progress>
        </div>
        <div className="content-center pt2 pb2 flex">
          <a
            className="db w-third hover-black-20 no-underline"
            href={data.links.chapters}
          >
            Chapters List
          </a>
          <a
            className="db br bl w-third b--moon-gray hover-black-20 no-underline"
            href={data.links.scores}
          >
            My Scores
          </a>
          <a
            className="db w-third hover-black-20 no-underline"
            href={data.links.keepG}
          >
            Keep Going
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClassList;
