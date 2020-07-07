import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { FaBalanceScale } from "react-icons/fa";

const api_call = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  console.log(exchangeRate);

  useEffect(() => {
    fetch(api_call)
      .then((response) => response.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Currency Converter</h1>
      </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <div className="scale">
        <FaBalanceScale />
      </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
      />
    </div>
  );
}

export default App;
