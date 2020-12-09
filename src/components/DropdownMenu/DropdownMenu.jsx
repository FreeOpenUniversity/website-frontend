import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function DropdownMenu() {
  const [userButton, setUserButton] = useState(false);

  const showMenu = () => setUserButton(!userButton);

  return (
    <div>
      <div className="ml5 userbtn">
        <Link to="#" className="dark-green f1 pl5">
          <FaIcons.FaUserAlt
            onMouseEnter={() => setUserButton(true)}
            onMouseLeave={() => setUserButton(false)}
          />
        </Link>
      </div>

      <nav
        className={
          userButton
            ? "flex bg-green w-auto pr3 pt1 pb2 fixed top-3 right-1"
            : "dn"
        }
      >
        <ul
          className="w-100 pl0 ml2"
          onMouseEnter={() => setUserButton(true)}
          onMouseLeave={() => setUserButton(false)}
        >
          {MenuData.map((item, index) => {
            return (
              <li key={index} className="items-center h2 ">
                <Link
                  to={item.path}
                  className="no-underline washed-blue f5 h-100 flex grow items-center ph1 br1"
                >
                  {item.icon}
                  <span className="ml2">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default DropdownMenu;
