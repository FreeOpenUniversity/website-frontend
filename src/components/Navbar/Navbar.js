import React from "react";
import { SearchBar } from "../../SearchBar";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="nav_bar_content">
        {/* <div> */}
        <ul>
          <div className="nav_bar_content_main avenir">
            <p>Logo</p>
            <li className="dropdown">
              Books
              {/* <button>View all categories</button> */}
              <ul className="sub_nav_bar">
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>

                {/* <Category name={bookname}/>  */}
                {/* <Category name="Philosophy"/>
                                <Category name="Philosophy2"/>
                                <Category name="Philosophy3"/>
                                <Category name="Philosophy4"/>
                                <Category name="Philosophy5"/>
                                <Category name="Philosophy6"/>
                                <Category name="Philosophy7"/>
                                <Category name="Philosophy8"/>
                                <Category name="Philosophy9"/>
                                <Category name="Philosophy10"/>
                                <Category name="Philosophy11"/>
                                <Category name="Philosophy12"/> */}
              </ul>
            </li>
            <li>Program and Degree</li>
            <li>Partners</li>
            <li>Others</li>
          </div>
          <div className="nav_bar_content_side">
            <SearchBar />
            {/* <DropdownMenu/> */}
            <button className="button">Register</button>{" "}
            {/*convert into a button component */}
          </div>
        </ul>
      </div>

      {/* button to login to online campus */}
    </div>
  );
};
// export default NavBar;
