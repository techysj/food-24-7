import RestroContainer, { withPromotedLabel } from "./RestroContainer";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTROS_API } from "../utils/constants";
import useOnlineState from "../utils/useOnlineState";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resDataState, setResDataState] = useState([]);
  const [resFilteredDataState, setresFilteredDataState] = useState([]);
  const ResPromotedData = withPromotedLabel(RestroContainer);
  const { user, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const API_DATA = await fetch(RESTROS_API);
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

  return resDataState.length === 0 ? (
    <Shimmer />
  ) : (
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
            Search 🔍
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
        <input
          className="border border-solid border-[#E1E1E6]  shadow-md   rounded-[4px] py-[4px] px-[8px] mr-5 text-sm"
          type="text"
          value={user}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-5">
        {resFilteredDataState.map((restaurent) => (
          <Link
            to={"/restaurent/" + restaurent.info.id}
            className="restroCard w-[23%] drop-shadow-sm"
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
    </div>
  );
};

export default Body;
