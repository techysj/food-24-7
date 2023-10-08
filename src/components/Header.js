import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="logo" />
    </div>
    <div className="menu-container">
      <ul className="navLinks-container">
        <li className="nav-link">Home</li>
        <li className="nav-link">Contact Us</li>
        <li className="nav-link">About Us</li>
        <li className="nav-link">Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
