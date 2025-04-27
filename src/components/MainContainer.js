import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  sortBy,
  filterBy,
  onBuy,
  onSell,
  onSortChange,
  onFilterChange,
  isLoading,
  error
}) {
  // Display loading state
  if (isLoading) {
    return (
      <div className="container mt-5">
        <h2>Loading stocks data...</h2>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="container mt-5">
        <h2>Error loading stocks:</h2>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBar 
        sortBy={sortBy}
        filterBy={filterBy}
        onSortChange={onSortChange}
        onFilterChange={onFilterChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks}
            sortBy={sortBy}
            filterBy={filterBy}
            onBuy={onBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            onSell={onSell}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
