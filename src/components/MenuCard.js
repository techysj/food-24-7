import { MENU_IMAGES } from "../utils/constants";
import { PLACEHOLDER_IMAGE } from "../utils/constants";
const MenuCard = (props) => {
  const { menuData } = props;
  const { name, defaultPrice, price, description, imageId } =
    menuData?.card?.info;
  return (
    <div className="flex items-start justify-between pb-[15px] mb-[15px] border-b-[0.5px] border-[#d3d3d3]">
      <div className="w-[70%]">
        <h3 className="text-base text-[#3e4152] font-semibold m-0">{name}</h3>
        <h4 className="text-sm text-[#3e4152] font-medium  mt-1">
          &#8377;{defaultPrice / 100 || price / 100}{" "}
        </h4>
        {(() => {
          if (description) {
            return <p className="text-sm text-[#5c5f8f] font-medium mt-2">{description}</p>;
          }
        })()}
      </div>
      <div className="right-section">
        {(() => {
          if (imageId) {
            return (
              <img
                className="h-[110px] w-[120px] rounded-md object-cover"
                alt="foodfood"
                src={MENU_IMAGES + imageId}
              />
            );
          } else {
            return (
              <img
                className="h-[110px] w-[120px] rounded-md object-cover"
                alt="foodfood"
                src={PLACEHOLDER_IMAGE}
              />
            );
          }
        })()}
      </div>
    </div>
  );
};
export default MenuCard;
