import React from "react";
import * as AiIcons from "react-icons/ai";
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
    title: "My Learning",
    path: "/my-classes",
    icon: <AiIcons.AiOutlineBook />,
  },

  {
    title: "Log Out",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
  },
];
