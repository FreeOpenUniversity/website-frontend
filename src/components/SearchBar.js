import { isEmpty } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { api } from "../store";

function handleChange(holder) {
  return (event) => {
    console.log(event.target.value);
    holder(event.target.value);
  };
}

function onSub(holder) {
  if (holder != "") {
    return (event) => {
      event.preventDefault();
      console.log("the word says " + holder);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: holder }),
      };
      fetch("http://66.76.242.195:8180/book", requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
  }
}

// function searchBar({ books, className }) {
//   let word = "";
//   api.book.read();
//     return (
//     <div className={"ma2 tc w100" + className}>
//       <form onSubmit={onSub(word)}>
//         <input
//         type="text"
//         className="fw5 avenir pv2 ph4 ph3-m br-pill mr2 b-dark-green outline-0 bn" onChange={handleChange(word)}/>
//         <button type="submit" className="fw6 avenir pa2 ph4 ph3-m br-pill f4 ttc bg-dark-green b-dark-green bw0 pointer outline-0 bn">
//         search
//         </button>
//       </form>
//     </div>
//   );
// }

// export const SearchBar = connect(
//   (state, props) => ({ books: state.book, ...props }),
//   {}
// )(searchBar);

export function SearchBar() {
  const [word, setWord] = useState("");
  api.book.read();
  return (
    <div className={"ma2 tc w100"}>
      <form onSubmit={onSub(word)}>
        <input
          type="text"
          className="fw5 avenir pv2 ph4 ph3-m br-pill mr2 b-dark-green outline-0 bn"
          onChange={handleChange(setWord)}
        />
        <button
          type="submit"
          className="fw6 avenir pa2 ph4 ph3-m br-pill f4 ttc bg-dark-green b-dark-green bw0 pointer outline-0 bn"
        >
          search
        </button>
      </form>
    </div>
  );
}
