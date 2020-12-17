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
        onMouseEnter={() => setUserButton(true)}
        onMouseLeave={() => setUserButton(false)}
      >
        <Link to="#" className="dark-green pb2">
          <span className="f1 no-underline">
            <FaIcons.FaUserAlt />
          </span>
          <nav className={userButton ? "flex bg-green w-auto" : "dn"}>
            <ul
              className="w-auto ph3"
              onMouseEnter={() => setUserButton(true)}
              onMouseLeave={() => setUserButton(false)}
            >
              {MenuData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="items-center h2 pv1 no-underline list"
                  >
                    <Link
                      to={item.path}
                      className="no-underline washed-blue f4 h-100 flex grow br2"
                    >
                      <span className="">{item.icon}</span>
                      <span className="">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Link>
      </div>
    </div>
  );
}

export default UserDropdownMenu;
