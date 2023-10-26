import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineState();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="menu-container">
        <ul className="navLinks-container">
          <li>Online Status:{onlineStatus ? "green" : "red"}</li>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
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
