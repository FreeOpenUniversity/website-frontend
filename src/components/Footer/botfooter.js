import { Link } from 'react-router-dom'
import logo1 from '../../Images/logo1.png'
import logo2 from '../../Images/logo2.png'

const BotFooter = () =>
    <div className="footer--bot">
        <div className="logo">
            <img id="OU-logo" src={logo1} alt="Opean University Logo" />
            <img id="OL-logo" src={logo2} alt="OpenLearn Logo" />
        </div>
        <div className="mid">
            <p>
                ©1999-2020. All rights reserved.
                The Open University is incorporated by Royal Charter (RC 000391),
                an exempt charity in England & Wales and a charity registered in Scotland (SC 038302).
                The Open University is authorised and regulated
                by the Financial Conduct Authority in relation to its secondary activity of credit broking.
            </p>
            <ul>
                <li><Link to=''>Accessibility</Link></li>
                <li><Link to=''>Conditions of Use</Link></li>
                <li><Link to=''>Privacy and Cookies</Link></li>
                <li><Link to=''>Modern Slavery Act</Link></li>
                <li><Link to=''>Copyright</Link></li>
            </ul>
        </div>
        <div>
            <ul className="social">
                <li>
                    <a href="https://twitter.com/oufreelearning" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        <div>Twitter</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ouopenlearn" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-square" aria-hidden="true"></i>
                        <div>Facebook</div>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/user/OUlearn" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                        <div>YouTube</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>


export default BotFooter;