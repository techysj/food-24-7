import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartStoreSlice";
import { Link } from "react-router-dom";
import img from "./media/empty-cart.webp";

const Cart = () => {
  const menuItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-[800px] mx-auto mt-10 h-screen px-[5%] lg:px-0">
      <div className="flex items-center justify-between">
        {menuItems.length != 0 && (
          <>
            <p className="font-bold text-lg">Cart Page</p>
            <p
              className="text-sm bg-gray-50 p-1 cursor-pointer rounded shadow-md"
              onClick={() => {
                handleClearCart();
              }}
            >
              Clear Cart ✖
            </p>
          </>
        )}
      </div>
      <div>
        {menuItems.length === 0 ? (
          <div className="flex items-center justify-center flex-col">
            <img src={img} className="w-72 h-64 object-cover" />
            <h2 className="font-semibold text-[#535665] mt-6 text-lg">
              Your cart is empty
            </h2>
            <p className="mt-2 text-[#7e808c] text-sm">
              You can go to home page to view more restaurants
            </p>
            <Link
              to="/"
              className="uppercase bg-orange-500 text-white mt-4 px-5 py-[11px] cursor-pointer text-sm font-semibold"
            >
              see restaurants near you
            </Link>
          </div>
        ) : (
          <CartList cartListItem={menuItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
