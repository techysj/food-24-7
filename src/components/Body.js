import RestroContainer from "./RestroContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestroFetch from "../utils/useRestroFetch";
import useOnlineState from "../utils/useOnlineState";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const fetchRestros = useRestroFetch();
  const resDataState = fetchRestros[0];
  const resFilteredDataState = fetchRestros[1];

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
