import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestroContainer = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId,id } = resData?.info; //this is called optional chaining --
  //  we dont need to  do resdata.info.name, resdata.info .cuisines to access the data
  return (
    <Link to={'/restaurent/'+ id} className="restroCard w-[23%] drop-shadow-sm">
      <div className="restroCard-container">
        <img className="w-full h-[200px] object-cover rounded-xl mb-2" src={CDN_URL + cloudinaryImageId} />
        <p className="restroInfo bold font-semibold text-[#414449] text-lg">{name}</p>
        <p className="restroInfo  text-[#02060c73] text-base">{cuisines.join(", ")}</p>
        <p className="restroInfo  text-[#02060c73] text-sm">{avgRating}/5</p>
      </div>
    </Link>
  );
};
export default RestroContainer;
