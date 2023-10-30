import RestroContainer from "./RestroContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import useRestroFetch from "../utils/useRestroFetch";
import useOnlineState from "../utils/useOnlineState";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resDataState, setResDataState] = useState([]); // --> we will do filteringfrom this i.e our orignal list of resto which never will be updated
  const [resFilteredDataState, setresFilteredDataState] = useState([]); //---> created to store the filtered data we'll render this whnever we do filter or anything
  // since this will be updated on filtering thus we will use the orignal list of resto to filter the data and render this only

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    // your api call logic here and update the state with received data
    const API =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5456897&lng=77.3882686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const API_DATA = await fetch(API);
    const JSON_DATA = await API_DATA.json();
    var restroArray =
      JSON_DATA?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResDataState(restroArray);
    setresFilteredDataState(restroArray);
  };

  const checkOnlineState = useOnlineState();
  if (checkOnlineState === false) {
    return <h2>Offline</h2>;
  }

  if (resDataState.length === 0) {
    return (
      <div className="shimmer-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="px-[11%]">
      <div className="flex items-center gap-5 mb-6">
        <div className="search-container">
          <input
            className="border border-solid border-[#E1E1E6]  shadow-md   rounded-[4px] py-[4px] px-[8px] mr-5 text-sm"
            type="text"
            placeholder="Search for products..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border border-solid border-[#E1E1E6]  shadow-md rounded-[4px] py-[4px] px-[8px] text-sm"
            onClick={() => {
              const searchFilter = resDataState.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setresFilteredDataState(searchFilter);
            }}
          >
            Search
          </button>
        </div>
        <div className="filterBest-container">
          <button
            className="border border-solid border-[#E1E1E6]  shadow-md rounded-[4px] py-[4px] px-[8px] text-sm"
            onClick={() => {
              const filteredData = resDataState.filter(
                (restro) => restro.info.avgRating > 4
              );
              setresFilteredDataState(filteredData);
            }}
          >
            Top Restasurents ⭐
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {resFilteredDataState.map((restaurent) => (
          <RestroContainer key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
