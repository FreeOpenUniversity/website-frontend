import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
import "./style.css";
import { MenuData } from "../MenuData";

function UserDropdownMenu() {
  const [userButton, setUserButton] = useState(false);

  const showMenu = () => setUserButton(!userButton);

  return (
    <div>
      <div className="userbtn">
        <Link to="#" className="menu-bars">
          <FaIcons.FaUserAlt onClick={showMenu} />
        </Link>
      </div>

      <nav className={userButton ? "drop-menu active" : "drop-menu"}>
        <ul className="menu-items" onClick={showMenu}>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default UserDropdownMenu;
