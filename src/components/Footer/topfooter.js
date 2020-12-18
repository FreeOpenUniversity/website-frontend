import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterMenu from "./footerMenu";

const sectionMenu1 = [
  { title: "About Us", link: "/about-us" },
  { title: "Contact OpenLearn", link: "/contact-us" },
  { title: "Frequently asked questions", link: "/questions" },
  { title: "Study with The Open University", link: "/" },
  { title: "Subscribe to our newsletter", link: "/" },
  { title: "OpenLearn Create", link: "/" },
  { title: "OpenLearn Cymru", link: "/" },
];

const sectionMenu2 = [
  { title: "Money & Business", link: "/" },
  { title: "Education & Development", link: "/" },
  { title: "Health, Sports & Psychology", link: "/" },
  { title: "History & The Arts", link: "/" },
  { title: "Languages", link: "/" },
  { title: "Nature & Environment", link: "/" },
  { title: "OpenLearn Cymru", link: "/" },
  { title: "Science, Maths & Technology", link: "/" },
  { title: "Society, Politics & Law", link: "/" },
];

const sectionMenu3 = [
  { title: "Latest from OpenLearn", link: "/" },
  { title: "Try something popular", link: "/" },
  { title: "Free courses", link: "/" },
  { title: "For Study", link: "/" },
  { title: "For Life", link: "/" },
  { title: "OU on TV & radio", link: "/" },
  { title: "Order our free print items", link: "/" },
  { title: "My OpenLearn profile", link: "/" },
];

const sectionMenu4 = [
  {
    title:
      "OpenLearn works with other organisations by providing free courses and resources that support our mission of opening up educational opportunities to more people in more places.",
    link: "none",
  },
  { title: "Find Out More", link: "/" },
  { title: "Support Us", link: "/" },
];

const TopFooter = () => {
  return (
    <div className="footer--top white center mv3 pb3">
      <FooterMenu
        title="About OpenLearn"
        items={sectionMenu1}
        hasBorder={true}
      />
      <FooterMenu
        title="Explore subjects"
        items={sectionMenu2}
        hasBorder={true}
      />
      <FooterMenu
        title="Explore resources"
        items={sectionMenu3}
        hasBorder={true}
      />
      <FooterMenu title="Our partners" items={sectionMenu4} hasBorder={false} />
    </div>
  );
};

export default TopFooter;
