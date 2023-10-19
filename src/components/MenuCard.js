import { MENU_IMAGES } from "../utils/constants";
import { PLACEHOLDER_IMAGE } from "../utils/constants";
const MenuCard = (props) => {
  const { menuData } = props;
  const { name, defaultPrice, price, description, imageId } =
    menuData?.card?.info;
  return (
    <div className="menu-container">
      <div className="left-section">
        <h3>{name}</h3>
        <h4>&#8377;{defaultPrice / 100 || price / 100} </h4>
        {(() => {
          if (description) {
            return <p>{description}</p>;
          }
        })()}
      </div>
      <div className="right-section">
        {(() => {
          if (imageId) {
            return <img className="menuImage" alt="foodfood" src={MENU_IMAGES + imageId} />;
          }else{
            return <img className="menuPlaceholder" alt="foodfood" src={PLACEHOLDER_IMAGE} />;
          }
        })()}
      </div>
    </div>
  );
};
export default MenuCard;
