import "./aboutus.css";
import AboutUs_Banner from "../../Images/about_us.jpg";
import Content from "./content";
import Sidebar from "./sidebar";
import Template from "../BlogTemplate";
import BreadCrumb from "../BlogTemplate/BreadCrumb";
import Banner from "../BlogTemplate/Banner";

const AboutUs = () => {
  return (
    <div>
      <BreadCrumb title="About Us" />
      <Banner
        title="About Us"
        date="Friday, 25th October 2019"
        image={AboutUs_Banner}
      />
      <Template Main={Content} Sidebar={Sidebar} />
    </div>
  );
};

export default AboutUs;
