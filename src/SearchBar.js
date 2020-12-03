import React from "react";

export function SearchBar({ books }) {
  return (
    <div className="ma2 tc">
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
