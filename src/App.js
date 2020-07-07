import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { FaBalanceScale } from "react-icons/fa";

const api_call = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])


  useEffect(() => {
    fetch(api_call)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <CurrencyRow />
      <div className="equals">
        <FaBalanceScale />
      </div>
      <CurrencyRow />
    </div>
  );
}

export default App;
