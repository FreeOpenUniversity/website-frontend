import React, { useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../../store";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";

const categories = [
  "Action",
  "Adventure",
  "Animation",
  "Children",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Filmnoir",
  "Horror",
  "Musical",
  "Mystery",
  "Romance",
  "Thriller",
  "Western",
];
const listitemstyles = "ba bg-white b--light-gray pa2 tl center pointer";

function SearchBarComponent({ className }) {
  useEffect(() => {
    const inp = document.getElementById("searchBar");
    autoComplete(inp, categories);
  });

  api.book.read();
  return (
    <div className={"ma2 tc w100 autocomplete relative " + className}>
      <input
        id="searchBar"
        type="text"
        className="fw5 avenir pv2 ph4 ph3-m br-pill mr2 b-dark-green outline-0 relative"
      />
      <button className="fw5 avenir pv2 ph4 ph3-m br-pill ttc bg-dark-green white bw0 pointer outline-0 bn">
        <FaSearch /> search
      </button>
    </div>
  );
}

function autoComplete(inp, arr) {
  let currFocus = -1;

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });

  inp.addEventListener("input", function (e) {
    let val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }

    let list = document.createElement("DIV");
    list.setAttribute("id", this.id + "autocomplete-list");
    list.setAttribute("class", "autocomplete-items w5 ph3 absolute");
    this.parentNode.appendChild(list);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        let listitem = document.createElement("DIV");
        listitem.setAttribute("class", listitemstyles);

        listitem.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        listitem.innerHTML += arr[i].substr(val.length);
        listitem.innerHTML += `<input type='hidden' value=${arr[i]} />`;

        listitem.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });

        list.appendChild(listitem);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    let currList = document.getElementById(this.id + "autocomplete-list");
    if (currList) {
      currList = currList.getElementsByTagName("div");
    }
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed*/
      currFocus++;
      /*and and make the current item more visible:*/
      addActive(currList);
    } else if (e.keyCode == 38) {
      /*If the arrow UP key is pressed*/
      currFocus--;
      /*and and make the current item more visible:*/
      addActive(currList);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed*/
      e.preventDefault();
      if (currFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (currList) {
          currList[currFocus].click();
        }
      }
    }
  });

  function closeAllLists(ele) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (ele != x[i] && ele != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  function addActive(x) {
    /*classify a list item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currFocus >= x.length) currFocus = currFocus % x.length;
    if (currFocus < 0) currFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
}

export const SearchBar = connect(
  (state, props) => ({ books: state.book, ...props }),
  {}
)(SearchBarComponent);
