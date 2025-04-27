import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, sortBy, filterBy, onBuy }) {
  // Filter the stocks based on the filterBy prop
  const filteredStocks = filterBy === "All" 
    ? stocks 
    : stocks.filter(stock => stock.type === filterBy);

  // Sort the filtered stocks based on the sortBy prop
  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortBy === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else if (sortBy === "Price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <h2>Stocks</h2>
      <div className="stock-container">
        {sortedStocks.map(stock => (
          <div key={stock.id} onClick={() => onBuy(stock)} style={{ cursor: 'pointer' }}>
            <Stock 
              id={stock.id}
              name={stock.name}
              price={stock.price}
              ticker={stock.ticker}
            />
          </div>
        ))}
        
        {sortedStocks.length === 0 && (
          <p>No stocks match the current filter.</p>
        )}
      </div>
    </div>
  );
}

export default StockContainer;
