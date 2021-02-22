import React from "react";
import { connect } from "react-redux";
import { api } from "../store";
import { FaSearch } from "react-icons/fa";
function searchBar({ className }) {
  api.book.read();
  return (
    <div className={"ma2 tc w100" + className}>
      <input
        type="text"
        className="fw5 avenir pv2 ph4 ph3-m br-pill mr2 b-dark-green outline-0"
      />
      <button className="fw5 avenir pv2 ph4 ph3-m br-pill ttc bg-dark-green white bw0 pointer outline-0 bn">
        <FaSearch /> search
      </button>
    </div>
  );
}

export const SearchBar = connect(
  (state, props) => ({ books: state.book, ...props }),
  {}
)(searchBar);
