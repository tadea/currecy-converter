import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { FaBalanceScale } from "react-icons/fa";

const api_call = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {
    fetch(api_call)
      .then((response) => response.json())
      .then((data) =>
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      );
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <CurrencyRow />
      <div className="scale">
        <FaBalanceScale />
      </div>
      <CurrencyRow />
    </div>
  );
}

export default App;
