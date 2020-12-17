import Template from "../BlogTemplate";
import Sidebar from "./sidebar";
import Main from "./main";
import ContactUsBanner from "../../Images/contactus-banner.jpg";
import BreadCrumb from "../BlogTemplate/BreadCrumb";
import Banner from "../BlogTemplate/Banner";

const ContactUs = () => (
  <>
    <BreadCrumb title="Contact Us" />
    <Banner
      title="Contact Us"
      date="Friday, 25th October 2019"
      image={ContactUsBanner}
    />
    <Template Main={Main} Sidebar={Sidebar} />
  </>
);

export default ContactUs;
