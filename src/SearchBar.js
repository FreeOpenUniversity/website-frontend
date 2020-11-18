import React from "react";

export function SearchBar({ books }) {
  return (
    <div className="">
      <input type="text" className="fw5 avenir pa2 br1"></input>
      <button className="fw5 avenir pa2 br1">search</button>
    </div>
  );
}
