import React from "react";
import FooterMenu from "./footerMenu";

const sectionMenu1 = [
  { title: "About Us", link: "/about-us" },
  { title: "Contact CIS", link: "/contact-us" },
  { title: "FAQ", link: "/questions" },
];

const sectionMenu2 = [{ title: "", link: "/" }];
const sectionMenu3 = [{ title: "", link: "/" }];
const sectionMenu4 = [{ title: "", link: "/" }];

const TopFooter = () => {
  return (
    <div className="footer--top white center mv3 pb3">
      <FooterMenu title="About CIS" items={sectionMenu1} hasBorder={true} />
      <FooterMenu title="-" items={sectionMenu2} hasBorder={true} />
      <FooterMenu title="-" items={sectionMenu3} hasBorder={true} />
      <FooterMenu title="-" items={sectionMenu4} hasBorder={false} />
    </div>
  );
};

export default TopFooter;
