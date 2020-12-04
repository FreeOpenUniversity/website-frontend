import Template from "../BlogTemplate";
import Sidebar from "./sidebar";
import Main from "./main";
import { Link } from "react-router-dom";
import ContactUsBanner from "../../Images/contactus-banner.jpg";
const ContactUs = () => (
  <>
    <div className="bg-light-gray dib w-100 pa3 nav">
      <div className="center mv1 mw8-l mw100-m">
        <span>
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </span>
        <span className="title">Contact Us</span>
      </div>
    </div>
    <div className="h-50 overflow-hidden ">
      <img
        className="w-100 h-25"
        src={ContactUsBanner}
        alt="Banner of About Us"
      />
      <div className="relative mw8 mw100-m center">
        <div className="bg-yellow absolute bottom-2 ph4">
          <h1>Contact Us</h1>
          <p>
            <em>Updated Friday, 25th October 2019</em>
          </p>
        </div>
      </div>
    </div>
    <Template Main={Main} Sidebar={Sidebar} dir="default" />
  </>
);

export default ContactUs;
