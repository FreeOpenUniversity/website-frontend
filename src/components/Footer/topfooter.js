import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterMenu from "./footerMenu";

const sectionMenu1 = [
  { title: "About Us", link: "/about-us" },
  { title: "Frequently asked questions", link: "/" },
  { title: "Study with The Open University", link: "/" },
  { title: "Subscribe to our newsletter", link: "/" },
  { title: "Contact OpenLearn", link: "/" },
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

const TopFooter = () => {
  useEffect(() => {
    let menus = document.getElementsByClassName("menu_header");

    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let menuItems = this.nextElementSibling;
        if (menuItems.style.maxHeight) {
          menuItems.style.maxHeight = null;
        } else {
          menuItems.style.maxHeight = menuItems.scrollHeight + "px";
        }
      });
    }
  });

  return (
    <div className="footer--top">
      <FooterMenu title="About OpenLearn" items={sectionMenu1} />
      <FooterMenu title="Explore subjects" items={sectionMenu2} />
      <FooterMenu title="Explore resources" items={sectionMenu3} />
      <div className="menu right">
        <h2 className="menu_header">Our partners</h2>
        <ul className="list-item">
          <p>
            OpenLearn works with other organisations by providing free courses
            and resources that support our mission of opening up educational
            opportunities to more people in more places.
          </p>
          <li>
            <Link to="/">Find Out More</Link>
          </li>
          <li>
            <Link to="/">Support Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopFooter;
