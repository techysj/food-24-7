import React from "react";
import MenuCard from "./MenuCard";
import ShimmerMenu from "./ShimmerMenu";
import useMenuFetch from "../utils/useMenuFetch";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const { restroID } = useParams();
  const menuInfo = useMenuFetch(restroID);

  if (menuInfo.length === 0) {
    return (
      <div className="shimmerMenu-container">
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
      </div>
    );
  }

  const itemCards =
    menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card
      ?.itemCards;
  return (
    <div className="max-w-[800px] mx-auto ">
      {itemCards.map((menuItem) => {
        return <MenuCard key={menuItem.card.info.id} menuData={menuItem} />;
      })}
    </div>
  );
};
export default RestroMenu;
