import Template from "../BlogTemplate";
import BreadCrumb from "../BlogTemplate/BreadCrumb";
import Banner from "../BlogTemplate/Banner";
import FAQBanner from "../../Images/faq-Banner.png";
import Content from "./content";
import Sidebar from "./sidebar";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      <BreadCrumb title="Frequently Asked Questions" />
      <Banner title="FAQ" date="Friday, 25th October 2019" image={FAQBanner} />
      <Template Main={Content} Sidebar={Sidebar} />
    </>
  );
}
