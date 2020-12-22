import { Link } from "react-router-dom";

const toggleItems = (e) => {
  if (window.innerWidth <= 600) {
    e.target.classList.toggle("active");
    let menuItems = e.target.nextElementSibling;

    if (menuItems.style.display == "block") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "block";
    }
  } else {
    e.preventDefault();
  }
};

const FooterMenu = ({ title, items, hasBorder }) => {
  return hasBorder ? (
    <div className="menu pl4">
      <h2 className="menu_header ttc mv4-m" onClick={toggleItems}>
        {title}
      </h2>
      <ul className="db-l dn list pl0 pl4-m">
        {items.map((menu, index) =>
          menu.link == "none" ? (
            <p key={index}>{menu.title}</p>
          ) : (
            <li key={index}>
              <Link to={menu.link}>{menu.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  ) : (
    <div className="menu right pl4">
      <h2 className="menu_header ttc mv4-m" onClick={toggleItems}>
        {title}
      </h2>
      <ul className="db-l dn list pl0 pl4-m">
        {items.map((menu, index) =>
          menu.link == "none" ? (
            <p key={index}>{menu.title}</p>
          ) : (
            <li key={index}>
              <Link to={menu.link}>{menu.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterMenu;
