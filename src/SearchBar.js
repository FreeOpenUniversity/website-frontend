import Axios from "axios";
import React from "react";
import path from "path";

export function SearchBar({ books, className }) {
  return (
    <div className={"ma2 tc " + className}>
      <input
        type="text"
        className="fw5 avenir pa2 br-pill ma2 b-dark-green bw0"
      ></input>
      <button className="fw5 avenir pa2 br-pill bg-green b-dark-green bw0">
        search
      </button>
    </div>
  );
}
