import MenuCard from "./MenuCard";

const RestaurentCategory = ({
  menuData,
  showItems,
  setshowIndex,
  setVisibleIndexNull,
  visibleIndex,
  currentIndex,
}) => {
  const handleClick = () => {
    visibleIndex === currentIndex ? setVisibleIndexNull() : setshowIndex();
  };
  return (
    <div className="px-2 py-3 my-2 shadow-lg rounded-lg bg-gray-50 ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <h1 className="font-bold text-base text-[#3e4152]">
          {menuData?.card?.card?.title} (
          {menuData?.card?.card?.itemCards.length})
        </h1>
        <p>{showItems ? "🔼" : "🔽"}</p>
      </div>
      {showItems && <MenuCard menuListItem={menuData?.card?.card?.itemCards} />}
    </div>
  );
};
export default RestaurentCategory;
