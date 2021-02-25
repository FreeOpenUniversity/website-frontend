import React, { useState } from "react";
import { Link } from "react-router-dom";

import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
import "./Navbar.css";
import { SubCategory } from "./SubCategory";
import profile_avatar from "../../Images/profile_avatar.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import twitter from "../../Images/twitter.png";
import googleplus from "../../Images/googleplus.png";

export const Navbar = ({ signedIn }) => {
  signedIn = false;
  const className =
    "link white hover-green hover-animate h2 pa2 h-auto pl4 dib";
  const plusSign = "plus mr3 pa1 fl dn-ns ";
  const minusSign = "minus mr3 pa1 fl dn-ns ";
  const icons = "h3 pa3";

  const [subCategory, setSubCategory] = useState(false);

  function toggleState(stateSetter) {
    stateSetter((prev) => {
      return !prev;
    });
  }

  const UserControls = () => {
    return signedIn ? (
      <div className={className}>
        <UserDropdownMenu />
      </div>
    ) : (
      <div className="ml-ns flex-column flex flex-row-ns mv2 ">
        <Link className={`${className} ml-custom`} to="/my-classes">
          MY CLASSES
        </Link>
        <Link className={`${className} f4 pt4`} to="./signup">
          <img src={profile_avatar} className="h1 pr3"></img>
          Sign Up
        </Link>
      </div>
    );
  };

  return (
    // main navbar
    <div className="fw5 flex flex-column flex-row-ns white  vh-100 w-100 h3-ns f4 bg-dark-blue z-index-100  ">
      <Link
        className={`${className} mt4 dropdown`}
        onClick={() => {
          toggleState(setSubCategory);
        }}
        to="./"
      >
        <div className={subCategory ? minusSign : plusSign}></div>CATEGORY
      </Link>

      <div className="w-100">{subCategory && <SubCategory />}</div>
      <UserControls />
      <div className="ma4 bt center pt2 dn-ns">
        <img src={facebook} className={icons}></img>
        <img src={instagram} className={icons}></img>
        <img src={twitter} className={icons}></img>
        <img src={googleplus} className={icons}></img>
      </div>
    </div>
  );
};
