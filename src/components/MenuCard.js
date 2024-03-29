import { useDispatch } from "react-redux";
import { MENU_IMAGES } from "../utils/constants";
import { PLACEHOLDER_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartStoreSlice";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const MenuCard = ({ menuListItem }) => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState("");

  const handleAddItem = (item) => {
    setCurrentId(item?.card?.info?.id);
    if (currentId != item.card.info.id) {
      dispatch(addItem(item));
      toast.success("Added to the Cart", {
        position: "top-center",
        duration: 1500,
      });
    }else{
      toast.error("Item already added to the Cart", {
        position: "top-center",
        duration: 1500,
      });
    }
  };
  return (
    <>
      <div className="mt-6">
        {menuListItem.map((item) => (
          <div
            key={item.card.info.id}
            data-testid="menuItem"
            className="flex items-start gap-2 justify-between pb-[15px] mb-[15px] border-b-[0.5px] border-[#d3d3d3]"
          >
            <div className="w-9/12">
              <h3 className="text-base text-[#3e4152] font-semibold m-0">
                {item.card.info.name}
              </h3>
              <h4 className="text-sm text-[#3e4152] font-medium  mt-1">
                &#8377;
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </h4>
              {item.card.info.description ? (
                <p className="text-sm text-[#5c5f8f] font-medium mt-2">
                  {item.card.info.description}
                </p>
              ) : (
                false
              )}
            </div>
            <div className="right-section relative">
              <div className="absolute bottom-2 left-1/2 translate-x-[-50%] text-sm text-green-600 ">
                <button
                  data-testid="addToCartBtn"
                  className="uppercase bg-white w-24 h-7 rounded-md font-bold shadow-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
              {item.card.info.imageId ? (
                <img
                  className="h-[110px] w-[120px] rounded-md object-cover"
                  alt="foodfood"
                  src={MENU_IMAGES + item.card.info.imageId}
                />
              ) : (
                <img
                  className="h-[110px] w-[120px] rounded-md object-cover"
                  alt="foodfood"
                  src={PLACEHOLDER_IMAGE}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </>
  );
};
export default MenuCard;
