import ContactUsLogo from "../../Images/contactus-logo.jpg";
import BeingOU from "../../Images/BeingOU.jpg";
import "./contactus.css";
import { Link } from "react-router-dom";

const Main = () => (
  <div>
    <h1 className="f2 mb4">We're here to help!</h1>
    <div>
      If you need any assistance or have any questions regarding OpenLearn then
      please follow our recommended three step approach:
    </div>
    <div className="flex">
      <div className="w-75">
        <p>1) Check out the 'Can we answer your question?' section below.</p>
        <p>
          2) Try our brand new chatbot, Oli! (See below.) Oli is new to our site
          and is currently in pilot phase but may be able to assist you.{" "}
        </p>
        <p>
          3) Consult our <strong>FAQ page</strong>.
        </p>
      </div>
      <div className="w-25">
        <img src={ContactUsLogo} alit="Logo of contact us" />
      </div>
    </div>

    <h1 className="=f2 mv4">Can we answer your question?</h1>

    <div className="flex items-center pt2 pb4 bb-border">
      <div className="w-20">
        <img src={BeingOU} alt="Thumbnail of BeingOU" />
      </div>
      <div className="w-60 pr3 br">
        <h3 className="f4">How to start a course?</h3>
        <p>
          Are you wondering about how to enroll, start or complete an OpenLearn
          course? Look no further, we're here to help!
        </p>
        <Link to="/">
          <strong>Read Now ></strong>
        </Link>
      </div>
      <div className="w-20 pl3 f6">
        <i class="fas fa-bookmark"></i> &nbsp;&nbsp;<strong>Article</strong>
      </div>
    </div>
    <div className="flex items-center pt2 pb4 bb-border">
      <div className="w-20">
        <img src={BeingOU} alt="Thumbnail of BeingOU" />
      </div>
      <div className="w-60 pr3 br">
        <h3 className="f4">My OpenLearn Account</h3>
        <p>
          Have questions concerning your OpenLearn account? Look no further,
          we're here to help!
        </p>
        <Link to="/">
          <strong>Read Now ></strong>
        </Link>
      </div>
      <div className="w-20 pl3 f6">
        <i class="fas fa-bookmark"></i> &nbsp;&nbsp;<strong>Article</strong>
      </div>
    </div>
    <div className="flex items-center pt2 pb4 bb-border">
      <div className="w-20">
        <img src={BeingOU} alt="Thumbnail of BeingOU" />
      </div>
      <div className="w-60 pr3 br">
        <h3 className="f4">Understanding Statements of participation </h3>
        <p>
          Have questions concerning your Statement of participation or badged
          courses? Look no further, we're here to help!
        </p>
        <Link to="/">
          <strong>Read Now ></strong>
        </Link>
      </div>
      <div className="w-20 pl3 f6">
        <i class="fas fa-bookmark"></i>&nbsp;&nbsp;<strong>Article</strong>
      </div>
    </div>
  </div>
);

export default Main;
