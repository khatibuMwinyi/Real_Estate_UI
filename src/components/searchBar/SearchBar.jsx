import React, { useState } from "react";
import "./searchBar.scss";

const types = ["Buy", "Rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            className={query.type === type ? "active" : ""}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={100000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={100000}
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
