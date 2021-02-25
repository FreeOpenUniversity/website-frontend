import React, { lazy, Suspense } from "react";
import ContactUsBanner from "../../Images/contactus-banner.jpg";

const Banner = lazy(() => import("../BlogTemplate/Banner"));
const Template = lazy(() => import("../BlogTemplate"));
const Content = lazy(() => import("./main"));
const Sidebar = lazy(() => import("./sidebar"));

const ContactUs = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Banner
      title="Contact Us"
      date="Friday, 25th October 2019"
      image={ContactUsBanner}
    />
    <Template Main={Content} Sidebar={Sidebar} />
  </Suspense>
);

export default ContactUs;
