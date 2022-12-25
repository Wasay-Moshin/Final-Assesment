import React from "react";
import useFetch from "../Layouts/useFetch";

function Coinsprices() {

//   const { data, loading, error } = useFetch(
//     "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
//   );

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1>error</h1>;
//   return (
//     <>
//       <div className="data">
//         <h1>Recent Prices</h1>
//       <ul>
//       {data &&
//         data.map((items) => (
//           <ul key={items.id}>
//             <li>
//               {" "}
//               <b>{items.data} </b>
//               {/* {items.price} */}
//             </li>
//             &nbsp;
//           </ul>
//         ))}
//         </ul>
//         </div>
//         {/* <div className="data">
//         <h1>Recent Prices</h1>
//       <ul>
//       {data &&
//         data.map((items) => (
//           <ul key={items.id}>
//             <li>
//               {" "}
//               <b>UserId:</b> {items.userId} <br /> <b>Title: </b>
//               {items.title}
//             </li>
//             &nbsp;
//           </ul>
//         ))}
//         </ul>
//         </div> */}
//     </>
//   );

    return (
      <div className="coinprice">
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
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
            </div>
          </div>
        </div>
      </div>
    )
}

export default Coinsprices;
