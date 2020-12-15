import React from "react";
import "./footer.css";
import TopFooter from "./topfooter";
import BotFooter from "./botfooter";

const Footer = () => {
  return (
    <div className="pt2 pb5 mv0 footer bg-dark-gray">
      <TopFooter />
      <BotFooter />
    </div>
  );
};

export default Footer;
