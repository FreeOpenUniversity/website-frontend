import React from "react";
import FooterMenu from "./footerMenu";

const sectionMenu1 = [
  { title: "About Us", link: "/about-us" },
  { title: "Contact CIS", link: "/contact-us" },
  { title: "Frequently Asked Questions", link: "/questions" },
];

const sectionMenu2 = [{ title: "", link: "/" }];

const sectionMenu4 = [{ title: "", link: "/" }];

const sectionMenu3 = [
  {
    title:
      "CIS works with other organisations by providing free courses and resources that support our mission of opening up educational opportunities to more people in more places.",
    link: "none",
  },
  { title: "Find Out More", link: "/" },
  { title: "Support Us", link: "/" },
];

const TopFooter = () => {
  return (
    <div className="footer--top white center mv3 pb3">
      <FooterMenu title="About CIS" items={sectionMenu1} hasBorder={true} />
      <FooterMenu title="Our partners" items={sectionMenu3} hasBorder={true} />
      <FooterMenu title="-" items={sectionMenu2} hasBorder={true} />
      <FooterMenu title="-" items={sectionMenu4} hasBorder={false} />
    </div>
  );
};

export default TopFooter;
