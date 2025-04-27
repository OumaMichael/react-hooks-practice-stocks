import React from "react";

function SearchBar({ sortBy, filterBy, onSortChange, onFilterChange }) {
  // Handle sort change
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="mb-3 p-3 bg-light">
      <strong>Sort by:</strong>
      <label className="mx-2">
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy === "Alphabetically"}
          onChange={handleSortChange}
          className="mx-1"
        />
        Alphabetically
      </label>
      <label className="mx-2">
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === "Price"}
          onChange={handleSortChange}
          className="mx-1"
        />
        Price
      </label>
      <br />
      <label className="mt-2">
        <strong>Filter:</strong>
        <select 
          value={filterBy}
          onChange={handleFilterChange}
          className="mx-2 form-select-sm"
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
