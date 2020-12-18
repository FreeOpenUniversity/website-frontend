import { isEmpty } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { api } from "../store";

function searchBar({ books, className }) {
  isEmpty(books) && api.book.read();
  return (
    <div className={"ma2 tc " + className}>
      <input
        type="text"
        className="fw5 avenir pv2 ph5 br-pill mr2 b-dark-green bw0"
      ></input>
      <button className="fw6 avenir pa2 ph4 br-pill  f4 ttc bg-dark-green b-dark-green bw0">
        search
      </button>
    </div>
  );
}

export const SearchBar = connect(
  (state, props) => ({ books: state.book, ...props }),
  {}
)(searchBar);
