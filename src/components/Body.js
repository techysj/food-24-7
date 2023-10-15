import RestroContainer from "./RestroContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resDataState, setResDataState] = useState([]); // --> we will do filteringfrom this i.e our orignal list of resto which never will be updated
  const [resFilteredDataState, setresFilteredDataState] = useState([]); //---> created to store the filtered data we'll render this whnever we do filter or anything
  // since this will be updated on filtering thus we will use the orignal list of resto to filter the data and render this only
  const [searchText, setSearchText] = useState("");

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
      JSON_DATA?.data.cards[2].card.card.gridElements.infoWithStyle
        ?.restaurants;

    setResDataState(restroArray);
    setresFilteredDataState(restroArray);
  };

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
    <div className="body">
      <div className="filter--container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
            className="filterData"
            onClick={() => {
              const filteredData = resDataState.filter(
                (restro) => restro.info.avgRating > 4
              );
              setresFilteredDataState(filteredData);
            }}
          >
            Click me to filter data
          </button>
        </div>
      </div>
      <div className="cards-container">
        {resFilteredDataState.map((restaurent) => (
          <RestroContainer key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
