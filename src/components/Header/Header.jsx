import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <img alt="" src={logo}/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/sign-in">Sign In</Link>
    </div>
  </div>
)

export default Header;
