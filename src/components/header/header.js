import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import alienLogo from '../../img/alien-logo.png';
import './Header.scss';


const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={alienLogo} alt="alien logo"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;