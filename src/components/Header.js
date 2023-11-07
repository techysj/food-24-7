import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineState();
  const {user} = useContext(UserContext);
  console.log(useContext(UserContext))

  return (
    <div className="flex items-center justify-between px-[2%] py-0 shadow-lg mb-10">
      <Link to="/">
        <div className="logo-container">
          <img className="w-28" src={LOGO_URL} alt="logo" />
        </div>
      </Link>

      <div className="menu-container">
        <ul className="flex gap-5 text-sm">
          <li className="flex items-center">
            Online Status:
            {onlineStatus ? (
              <span className="text-xs ml-1">🟢</span>
            ) : (
              <span className="text-xs ml-1">🔴</span>
            )}
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-link">Cart</li>
          <li className="nav-link">{user}</li>
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
