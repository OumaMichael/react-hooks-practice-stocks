import React from "react";

function Stock({ id, name, price, ticker }) {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{name} ({ticker})</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;
