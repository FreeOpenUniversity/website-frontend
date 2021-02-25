import React, { lazy, Suspense } from "react";
import FAQBanner from "../../Images/faq-Banner.png";
import "./FAQ.css";

const Banner = lazy(() => import("../BlogTemplate/Banner"));
const Template = lazy(() => import("../BlogTemplate"));
const Content = lazy(() => import("./content"));
const Sidebar = lazy(() => import("./sidebar"));

export default function FAQ() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <BreadCrumb title="Frequently Asked Questions" /> */}
      <Banner title="FAQ" date="Friday, 25th October 2019" image={FAQBanner} />
      <Template Main={Content} Sidebar={Sidebar} />
    </Suspense>
  );
}
