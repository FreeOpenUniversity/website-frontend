import React from "react";

export function SearchBar({ books, handler }) {
  return (
    <div className="ma2 mt4 tc">
      <input
        type="text"
        className="fw5 avenir pa2 ma2 b-dark-green bw0 input-reset"
      ></input>
      <button onClick={handler} className="fw5 avenir pa2 blueprint-white bg-blueprint-blue bw0 input-reset pointer hover-bg-fawn">
        search
      </button>
    </div>
  );
}
