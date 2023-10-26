import { useState, useEffect } from "react";

const useRestroFetch = () => {
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
  return [resDataState, resFilteredDataState];
};
export default useRestroFetch;
