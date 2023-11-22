const RestroMenuInfo = ({ menuRestaurentInfo }) => {
  const {
    name,
    costForTwo,
    avgRating,
    cuisines,
    totalRatingsString,
    areaName,
  } = menuRestaurentInfo?.card?.card?.info;
  return (
    <div className="flex justify-between mb-5 pb-5 border-b border-[#d3d3d3]">
      <div className="w-3/4">
        <p className="text-lg font-semibold text-[#282c3f]">{name}</p>
        <p className="text-sm font-medium text-[#7e808c]">{cuisines.join(', ')}</p>
        <p className="text-sm font-medium text-[#7e808c]">
          {areaName} - &#8377;{costForTwo / 100} for Two
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-2 border border-[#d3d3d3] rounded-lg">
        <h4 className="mb-1 font-bold text-green-600 flex items-center text-base">
          ⭐{avgRating}
        </h4>
        <h4 className="text-xs pt-1 border-t-[0.5px] border-[#d3d3d3] font-semibold text-[#8b8d97]">
          {totalRatingsString}
        </h4>
      </div>
    </div>
  );
};
export default RestroMenuInfo;
