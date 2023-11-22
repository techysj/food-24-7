import { useState, useEffect } from "react";

const useRestroFetch = (RESTROS_API) => {
  const [resDataState, setResDataState] = useState([]);
  const [resFilteredDataState, setresFilteredDataState] = useState([]);
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
  return [resDataState, resFilteredDataState];
};
export default useRestroFetch;
