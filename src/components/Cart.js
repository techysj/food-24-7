import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartStoreSlice";

const Cart = () => {
  const menuItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">Cart Page</p>
        <p
          className="text-sm bg-gray-50 p-1 cursor-pointer rounded shadow-md"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear Cart ✖
        </p>
      </div>
      <div>
        {menuItems.length === 0 ? (
          <h1 className="text-sm text-center font-semibold text-[#4a5d78] pt-16">
            YOUR CART IS EMPTY. LET'S ADD SOMETHING.
          </h1>
        ) : (
          <MenuCard menuListItem={menuItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
