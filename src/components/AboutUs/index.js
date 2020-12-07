import "./aboutus.css";
import AboutUs_Banner from "../../Images/about_us.jpg";
import { Link } from "react-router-dom";
import Content from "./content";
import Sidebar from "./sidebar";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="bg-light-gray dib w-100 pa3 nav">
        <div className="center mv1 mw8-l mw100-m">
          <span>
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </span>
          <span className="title">About Us</span>
        </div>
      </div>
      <div className="banner">
        <img className="w-100" src={AboutUs_Banner} alt="Banner of About Us" />
        <div className="relative mw8 mw100-m center">
          <div className="bg-white absolute bottom-2 ph4">
            <h1>About Us</h1>
            <p>
              <em>Updated Friday, 25th October 2019</em>
            </p>
          </div>
        </div>
      </div>

      <div className="center mw8-l mw100 min-vh-100">
        <Content />
        <Sidebar />
      </div>
    </div>
  );
};

export default AboutUs;
