import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div className="portfolio">
        {portfolio.length > 0 ? (
          portfolio.map(stock => (
            <div 
              key={stock.id} 
              onClick={() => onSell(stock.id)} 
              style={{ cursor: 'pointer' }}
            >
              <Stock 
                id={stock.id}
                name={stock.name}
                price={stock.price}
                ticker={stock.ticker}
              />
            </div>
          ))
        ) : (
          <p>Your portfolio is empty. Click on stocks to buy them!</p>
        )}
      </div>
    </div>
  );
}

export default PortfolioContainer;
