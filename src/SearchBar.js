import React from "react";

export function SearchBar({ books }) {
  return (
    <div className="">
      <input
        type="text"
        className="fw5 avenir pv2 ph5 br-pill mr2 b-dark-green bw0"
      ></input>
      <button className="fw6 avenir pa2 ph4 br-pill f4 ttc bg-green b-dark-green bw0">
        search
      </button>
    </div>
  );
}
