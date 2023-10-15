import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  return (
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
          <button
            className="login-btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
