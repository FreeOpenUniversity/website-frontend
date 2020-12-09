import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const MenuData = [
  {
    title: "Acount Setting",
    path: "/setting",
    icon: <AiIcons.AiOutlineSetting />,
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <RiIcons.RiUserSettingsLine />,
  },

  {
    title: "Log Out",
    path: "/#",
    icon: <AiIcons.AiOutlineLogout />,
  },
];
