import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { info } = props.resInfo;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+
          info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;