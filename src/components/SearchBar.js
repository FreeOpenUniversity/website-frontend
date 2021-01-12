import { isEmpty } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { api } from "../store";

function searchBar({ books, className }) {
  api.book.read();
  return (
    <div className={"ma2 tc w100" + className}>
      <input
        type="text"
        className="fw5 avenir pv2 ph4 ph3-m br-pill mr2 b-dark-green outline-0 bn"
      />
      <button className="fw6 avenir pa2 ph4 ph3-m br-pill f4 ttc bg-dark-green b-dark-green bw0 pointer outline-0 bn">
        search
      </button>
    </div>
  );
}

export const SearchBar = connect(
  (state, props) => ({ books: state.book, ...props }),
  {}
)(searchBar);
