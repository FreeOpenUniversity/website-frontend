import { Link } from "react-router-dom";

const FooterMenu = ({ title, items }) =>
    <div className="menu">
        <h2 className="menu_header">{title}</h2>
        <ul className="list-item">
            {
                items.map((menu, index) =>
                    <li key={index}><Link to={menu.link}>{menu.title}</Link></li>
                )
            }
        </ul>
    </div>

export default FooterMenu;