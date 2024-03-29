import RestroContainer, { withPromotedLabel } from "./RestroContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTROS_API } from "../utils/constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resDataState, setResDataState] = useState([]);
  const [resFilteredDataState, setresFilteredDataState] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const ResPromotedData = withPromotedLabel(RestroContainer);

  const handleSearch = () => {
    if (searchText != 0) {
      const searchFilter = resDataState.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setresFilteredDataState(searchFilter);
      setErrMessage("");
      if (searchFilter.length === 0) {
        setErrMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrMessage("");
      setresFilteredDataState(resDataState);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const API_DATA = await fetch(RESTROS_API);
    const JSON_DATA = await API_DATA.json();
    // var restroArray =
    //   JSON_DATA?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    const restroArray = JSON_DATA?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResDataState(restroArray);
    setresFilteredDataState(restroArray);
  };

  if (resDataState.length === 0 && resFilteredDataState.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="px-[11%]  mt-10 pt-20 pb-28 min-h-screen">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="search-container">
          <input
            className="border border-solid border-[#E1E1E6] selection:shadow-md rounded-[4px] py-[4px] px-[8px] text-sm"
            data-testid="searchInput"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyUp={handleSearch}
          />
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
            Top Rated Restasurents ⭐
          </button>
        </div>
      </div>
      {resDataState && (
        <div className="flex flex-wrap gap-5">
          {resFilteredDataState.map((restaurent) => (
            <Link
              to={"/restaurent/" + restaurent.info.id}
              className="restroCard sm:w-[30%] lg:w-[23%] w-full drop-shadow-sm"
              key={restaurent.info.id}
            >
              {restaurent.info.veg ? (
                <ResPromotedData resData={restaurent} />
              ) : (
                <RestroContainer resData={restaurent} />
              )}
            </Link>
          ))}
        </div>
      )}
      {errMessage && (
        <div className="text-center mb-3 mt-5 font-ProximaNovaBlack text-2xl">
          {errMessage}
        </div>
      )}
    </div>
  );
};

export default Body;
