import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestroContainer = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId,id } = resData?.info; //this is called optional chaining --
  //  we dont need to  do resdata.info.name, resdata.info .cuisines to access the data
  return (
    <Link to={'/restaurent/'+ id} className="restroCard">
      <div className="restroCard-container">
        <img src={CDN_URL + cloudinaryImageId} />
        <p className="restroInfo restroName">{name}</p>
        <p className="restroInfo cuisineName">{cuisines.join(", ")}</p>
        <p className="restroInfo restroRating">{avgRating}/5</p>
      </div>
    </Link>
  );
};
export default RestroContainer;
