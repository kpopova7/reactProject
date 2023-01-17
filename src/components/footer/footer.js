import Navbar from '../navbar/navbar';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <div>some text yeyyyy</div>
      </div>
    </footer>
  );
};

export default Footer;