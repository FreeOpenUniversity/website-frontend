import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const MenuData = [
  {
    title: "Acount Setting",
    path: "/setting",
    icon: <AiIcons.AiOutlineSetting />,
    cName: "nav-text",
  },

  {
    title: "MyLearing",
    path: "/mylearning",
    icon: <BsIcons.BsBook />,
    cName: "nav-text",
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <RiIcons.RiUserSettingsLine />,
    cName: "nav-text",
  },
];
