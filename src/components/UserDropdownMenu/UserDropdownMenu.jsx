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
        onMouseEnter={() => showMenu()}
        onMouseLeave={() => showMenu()}
      >
        <div className="">
          <Link to="#" className="dark-green">
            <FaIcons.FaUserAlt />
          </Link>

          <nav
            className={userButton ? "flex bg-green fixed pv0 ma0 ph1 " : "dn"}
          >
            <ul className="pl0 ml2">
              {MenuData.map((item, index) => {
                return (
                  <li key={index} className="items-center h2 list ">
                    <Link
                      to={item.path}
                      className="no-underline washed-blue f5 h-100 flex grow items-center ph2 br1"
                    >
                      {item.icon}
                      <span className="pl2 ">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default UserDropdownMenu;
