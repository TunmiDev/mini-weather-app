import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section>
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-form-input"
        />
        <input type="submit" value="search" className="search-from-button" />
      </form>
    </section>
  );
};

export default SearchBar;
