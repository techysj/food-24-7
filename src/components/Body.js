import RestroContainer from "./RestroContainer";
import { restroList } from "../utils/fakeData";
import { useState } from "react";

let restData = [
  {
    info: {
      id: "90872",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-noida-1-396440",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90882",
      name: "KFC",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      avgRating: 3.2,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-noida-1-396440",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "90844",
      name: "DOMS",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-noida-1-396440",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  const [resDataState, setResDataState] = useState(restroList);
  return (
    <div className="body">
      <button
        className="filterData"
        onClick={() => {
          const filteredData = resDataState.filter(
            (restro) => restro.info.avgRating > 4
          );
          setResDataState(filteredData);
        }}
      >
        Click me to filter data
      </button>
      <div className="cards-container">
        {resDataState.map((restaurent) => (
          <RestroContainer key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
