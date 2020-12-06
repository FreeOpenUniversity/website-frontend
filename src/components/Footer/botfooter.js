import { Link } from "react-router-dom";
import logo1 from "../../Images/logo1.png";
import logo2 from "../../Images/logo2.png";

const BotFooter = () => (
  <div className="footer--bot h5-m white center mb6 ph2 pv4 tc-m">
    <div className="logo fl-l w-third-l w-100 fn">
      <img id="OU-logo" src={logo1} alt="Opean University Logo" />
      <img className="ml3 ml0-m" src={logo2} alt="OpenLearn Logo" />
    </div>
    <div className="fl-l w-third-l w-100 fn">
      <p className="f7">
        ©1999-2020. All rights reserved. The Open University is incorporated by
        Royal Charter (RC 000391), an exempt charity in England & Wales and a
        charity registered in Scotland (SC 038302). The Open University is
        authorised and regulated by the Financial Conduct Authority in relation
        to its secondary activity of credit broking.
      </p>
      <ul className="list pl0 tc">
        <li className="dib pr3">
          <Link to="">Accessibility</Link>
        </li>
        <li className="dib pr3">
          <Link to="">Conditions of Use</Link>
        </li>
        <li className="dib pr3">
          <Link to="">Privacy and Cookies</Link>
        </li>
        <li className="dib pr3">
          <Link to="">Modern Slavery Act</Link>
        </li>
        <li className="dib pr3">
          <Link to="">Copyright</Link>
        </li>
      </ul>
    </div>
    <div className="fl-l w-third-l w-100 fn">
      <ul className="social fr list pl0 fn-m">
        <li>
          <a
            href="https://twitter.com/oufreelearning"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter f1" aria-hidden="true"></i>
            <div>Twitter</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ouopenlearn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square f1" aria-hidden="true"></i>
            <div>Facebook</div>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/user/OUlearn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube f1" aria-hidden="true"></i>
            <div>YouTube</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default BotFooter;
