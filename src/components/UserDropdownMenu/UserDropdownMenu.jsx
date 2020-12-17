import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";

function UserDropdownMenu() {
  const [userButton, setUserButton] = useState(false);

  const showMenu = () => setUserButton(!userButton);

  return (
    <div>
      <div
        className="ml5 f1 pl5"
        onMouseEnter={() => setUserButton(true)}
        onMouseLeave={() => setUserButton(false)}
      >
        <Link to="#" className="dark-green">
          <FaIcons.FaUserAlt />
        </Link>

        <nav
          className={
            userButton
              ? "flex bg-green w-auto pr3 pt1 pb2 fixed top-3 right-2"
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
    </div>
  );
}

export default UserDropdownMenu;
