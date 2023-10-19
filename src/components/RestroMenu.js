import React from "react";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestroMenu = () => {
  const [menuInfo, setMenuInfo] = useState("");
  const { restroID } = useParams();
  console.log(restroID)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const MENU_DATA = await fetch(MENU_API.concat(restroID));
    const MENU_JSON = await MENU_DATA.json();
    const MENU = MENU_JSON?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.itemCards;
    setMenuInfo(MENU);
    console.log(MENU_JSON)
  };
  if (menuInfo.length === 0) {
    return (
      <div className="shimmerMenu-container">
        <ShimmerMenu />
        <ShimmerMenu />
        <ShimmerMenu />
      </div>
    );
  }
  return (
    <div className="menuPage">
      {menuInfo.map((menuItem) => {
        return <MenuCard key={menuItem.card.info.id} menuData={menuItem} />;
      })}
    </div>
  );
};
export default RestroMenu;
