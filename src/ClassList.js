import React from "react";
import "./classList.css";

function ClassList(data) {
  return (
    <div className="w-two-thirds bw1 br4 card tc center bw1 bn black-80">
      <div className="flex">
        <img
          src={data.imgLink}
          style={{ resizeMode: "cover" }}
          className="db w-20 dn-m br4 br--left"
          alt={data.imgAlt}
        />
        <article>
          <h1 className="ma0">{data.title}</h1>
          <hr className="w-80" />
          <p className="f6 lh-copy mb0">{data.desc}</p>
        </article>
      </div>
      <div className="hidden pt2">
        <progress
          className="db center w-70"
          value={data.progress}
          max="100"
        ></progress>
        <div className="content-center pt2 pb2 flex">
          <a className="db w-third hover-black-20" href={data.links.chapters}>
            Chapters List
          </a>
          <a
            className="db br bl w-third b--moon-gray hover-black-20"
            href={data.links.scores}
          >
            My Scores
          </a>
          <a className="db w-third hover-black-20" href={data.links.keepG}>
            Keep Going
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClassList;
