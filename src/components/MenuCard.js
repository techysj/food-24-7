import { MENU_IMAGES } from "../utils/constants";
import { PLACEHOLDER_IMAGE } from "../utils/constants";
const MenuCard = ({ menuListItem }) => {
  return (
    <div className="mt-6">
      {menuListItem.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-start justify-between pb-[15px] mb-[15px] border-b-[0.5px] border-[#d3d3d3]"
        >
          <div className="w-9/12">
            <h3 className="text-base text-[#3e4152] font-semibold m-0">
              {item.card.info.name}
            </h3>
            <h4 className="text-sm text-[#3e4152] font-medium  mt-1">
              &#8377;
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </h4>
            {(() => {
              if (item.card.info.description) {
                return (
                  <p className="text-sm text-[#5c5f8f] font-medium mt-2">
                    {item.card.info.description}
                  </p>
                );
              }
            })()}
          </div>
          <div className="right-section">
            {(() => {
              if (item.card.info.imageId) {
                return (
                  <img
                    className="h-[110px] w-[120px] rounded-md object-cover"
                    alt="foodfood"
                    src={MENU_IMAGES + item.card.info.imageId}
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
      ))}
    </div>
  );
};
export default MenuCard;
