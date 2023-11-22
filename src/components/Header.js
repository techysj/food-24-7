import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
const Header = () => {
  const [ShowSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!ShowSidebar);
  };

  const handleNavItem = () => {
    setShowSidebar(false);
  };

  const cartItems = useSelector((store) => store.cart.item);

  return (
    <div className="flex items-center justify-between px-[2%] h-[85px] shadow-lg sticky top-0 bg-white z-10">
      <Link to="/">
        <div className="flex items-center">
          <img
            className="border border-black h-[60px] rounded-full"
            src={LOGO_URL}
            alt="logo"
          />
          <p className="ml-2 sm:ml-4 cursor-pointer text-base text-black font-bold uppercase">
            Food 24/7
          </p>
        </div>
      </Link>

      <div className="menu-container">
        <ul className="sm:flex gap-16 text-sm hidden">
          <li className="nav-link font-semibold text-customblack-1">
            <Link to="/about">About Us</Link>
          </li>

          <li className="nav-link font-semibold text-customblack-1 relative">
            <Link to="/cart">
              {cartItems.length > 0 ? (
                <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-[26px]">
                    <svg
                      className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-7">
                    <svg
                      className="fill-white stroke-2 stroke-[#282c3f] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              )}
              <span>Cart</span>
            </Link>
          </li>
        </ul>
        <div
          className="text-2xl cursor-pointer mr-1 sm:hidden"
          onClick={handleSidebar}
        >
          <MdOutlineRestaurantMenu />
        </div>
      </div>
      <div
        className={`h-screen w-full z-[99999] bg-white fixed top-0 ${
          ShowSidebar ? "left-0" : "-left-full"
        } right-0 transition-all duration-500`}
      >
        <div
          className="text-3xl cursor-pointer absolute right-5 top-6"
          onClick={handleSidebar}
        >
          <IoMdCloseCircleOutline />
        </div>

        <ul className="flex gap-16 items-center text-customblack-1 flex-col justify-center text-2xl h-full">
          <li onClick={handleNavItem} className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleNavItem} className="nav-link">
            <Link to="/about">About</Link>
          </li>
          <li onClick={handleNavItem} className="relative ml-10 nav-link">
            <Link to="/cart">
              {cartItems.length > 0 ? (
                <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-[26px]">
                    <svg
                      className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-white">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              ) : (
                <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-7">
                    <svg
                      className="fill-white stroke-2 stroke-[#282c3f] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base">
                      {cartItems.length}
                    </span>
                  </span>
                </>
              )}
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
