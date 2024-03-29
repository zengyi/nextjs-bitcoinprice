import { useState } from "react";

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div>
      <p>Check current Bitcoin Rate:</p>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi[currency].description}:{" "}
          <span className="badge badge-primary">{bpi[currency].code}</span>{" "}
          <strong>{bpi[currency].rate}</strong>
        </li>
      </ul>
      <br />
      <select
        onChange={e => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
