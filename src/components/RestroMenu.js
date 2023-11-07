import React, { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import useMenuFetch from "../utils/useMenuFetch";
import { useParams } from "react-router-dom";
import RestroMenuInfo from "./RestroMenuInfo";
import RestaurentCategory from "./RestaurentCategory";

const RestroMenu = () => {
  const [showIndex, setshowIndex] = useState(0);
  const { restroID } = useParams();
  const menuInfo = useMenuFetch(restroID);

  if (menuInfo.length === 0) {
    return (
      <div className="max-w-[800px] mx-auto">
        <ShimmerMenu />
      </div>
    );
  }

  const itemCards =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const menuRestroInfo = menuInfo?.cards[0];
  const categories = itemCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="max-w-[800px] mx-auto pb-16">
      <RestroMenuInfo menuRestaurentInfo={menuRestroInfo} />

      {categories.map((categories, index) => {
        return (
          <RestaurentCategory
            key={categories.card.card.title}
            menuData={categories}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
            setVisibleIndexNull = {()=>{setshowIndex(null);}}
            visibleIndex={showIndex}
            currentIndex = {index}
          />
        );
      })}
    </div>
  );
};
export default RestroMenu;
