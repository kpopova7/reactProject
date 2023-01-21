import { Link } from 'react-router-dom';
import alienLogo from '../../img/alien-logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <Link to="/" className="logo">
          <img src={alienLogo} alt="alien logo"/>
        </Link>
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div className="col social">
          <h1>Social</h1>
          <ul>
            <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" width="32" alt="facebook"/></li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="32" alt="instagram"/></li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" width="32" alt="twitter"/></li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </footer>
  );
};

export default Footer;