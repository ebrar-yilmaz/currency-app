import React, { useState } from "react";
import "../css/currency.css";
import { BsArrowRightCircle } from "react-icons/bs";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Pv3a9qR5R4KV5phHvKu4Ox5638NB2oYrbL9nMPaB";

let EXCHANGE_API = ``;

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );

    const result = (response.data.data[toCurrency] * amount).toFixed(2);

    setResult(result);
  };

  return (
    <div className="currency-div">
      <div
        style={{
          fontFamily: "arial",
          backgroundColor: "black",
          color: "#fff",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />

        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TYR</option>
        </select>

        <BsArrowRightCircle style={{ fontSize: "28px", marginRight: "5px" }} />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TYR</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>

      <div>
        <button className="exchange-button" onClick={() => exchange()}>
          {" "}
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
