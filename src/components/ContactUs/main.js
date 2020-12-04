import ContactUsLogo from "../../Images/contactus-logo.jpg";

const Main = () => (
  <div>
    <h1 className="f1 mb4">We're here to help</h1>
    <div className="fl w-75">
      <p>1) Check out the 'Can we answer your question?' section below.</p>
      <p>
        2) Try our brand new chatbot, Oli! (See below.) Oli is new to our site
        and is currently in pilot phase but may be able to assist you.{" "}
      </p>
      <p>3) Consult our FAQ page.</p>
    </div>
    <div className="fl w-25">
      <img src={ContactUsLogo} alit="Logo of contact us" />
    </div>
  </div>
);

export default Main;
