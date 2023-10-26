import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuFetch = (restroID) => {
  const [menuInfo, setMenuInfo] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const MENU_DATA = await fetch(MENU_API.concat(restroID));
    const MENU_JSON = await MENU_DATA.json();
    setMenuInfo(MENU_JSON.data);
  };

  return menuInfo;
};
export default useMenuFetch;
