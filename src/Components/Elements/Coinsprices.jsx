import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const urls = [
  "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
  "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
  "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT",
  "https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT",
];
function Coinsprices() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from api
  useEffect(() => {
    const buffer = [];
    urls.forEach(async (item, index) => {
      const res = await fetch(item);
      const result = await res.json();
      buffer.push(result);
      setData([...buffer]);
      if (index === urls.length - 1) {
        setLoading(false);
        // save to database logic
        // ...
      }
    });
  }, []);


  return (
    <div className="coinprice">
      <div className="container">
        <div className="row">
          <div className="text-center mb-5">
            <h1>
              Recent Prices
            </h1>
          </div>
        {loading ? (
            <h1>Loading...</h1>
          ) : (
            data.length &&
            data.map((item) => (
              <div className="col-md-3">
                <div className="card border shadow">

                <h4 key={item.symbol}>
                    {item.symbol}:<br/> ${item.price}
                  </h4>
                </div>
              </div>
            ))
          )}
          {/* <div className="text-center mb-5">
            <h1>Recent Prices</h1>
          </div>
          <div className="col-md-3 mb-2">
            <div className="card border shadow">
              <div className="bitcoin">
                <img src="Assets/bitcoin.png" alt="" width={80} />
                <div className="mt-2">
                  <b>$000</b>
                  <h3>Bitcoin</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="card border shadow">
              <div className="bitcoin">
                <img src="Assets/ethereum.png" alt="" width={80} />
                <div className="mt-2">
                  <b>$000</b>
                  <h3>Etherum</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3 mb-2">
            <div className="card border shadow">
              <div className="bitcoin">
                <img src="Assets/binance.png" alt="" width={80} />
                <div className="mt-2">
                  <b>$000</b>
                  <h3>BNB</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border shadow">
              <div className="bitcoin">
                <img src="Assets/xrp.png" alt="" width={80} />
                <div className="mt-2">
                  <b>$000</b>
                  <h3>XRP</h3>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Coinsprices;
