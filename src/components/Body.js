import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";
import Header from "./Header.js";

const Body = () => {
  const [filteredResList, setFilteredResList] = useState(resList);
  const [searchText, setSearchText] = useState("");

  const handleFilterButtonClick = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredResList(filteredList);
  };

  const handleSearchButtonClick = () => {
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return(
    <>
    {/* < Header /> */}
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearchButtonClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterButtonClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Body;
