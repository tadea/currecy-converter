import React from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
