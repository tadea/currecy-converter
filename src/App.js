import React from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { FaBalanceScale } from "react-icons/fa";

function App() {
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
