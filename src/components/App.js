import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/stocks")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStocks(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Add a stock to portfolio
  const handleBuyStock = (stock) => {
    // Check if stock is already in portfolio to prevent duplicates
    if (!portfolio.find(item => item.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  // Remove a stock from portfolio
  const handleSellStock = (stockId) => {
    setPortfolio(portfolio.filter(stock => stock.id !== stockId));
  };

  // Handle sort change
  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  // Handle filter change
  const handleFilterChange = (filterValue) => {
    setFilterBy(filterValue);
  };

  return (
    <div>
      <Header />
      <MainContainer 
        stocks={stocks}
        portfolio={portfolio}
        sortBy={sortBy}
        filterBy={filterBy}
        onBuy={handleBuyStock}
        onSell={handleSellStock}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default App;
