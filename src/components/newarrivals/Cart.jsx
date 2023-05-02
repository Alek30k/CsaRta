import React from "react";
import Ndata from "./Ndata";

const Cart = () => {
  return (
    <>
      <div className="content grid1 productStock">
        {Ndata.map((val, index) => {
          return (
            <div className="boxNew " key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div>
                <h4>{val.name}</h4>
              </div>
              <div className="boxPrice">
                <span>${val.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
