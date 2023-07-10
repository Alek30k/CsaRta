import React from "react";
import Ndata from "./Ndata";
import { Link } from "react-router-dom";

const Cart = ({ productItems }) => {
  return (
    <>
      <div className="content grid productStock" id="resize">
        {Ndata.map((val, index) => {
          return (
            <div className="boxNew " key={index}>
              <div className="img">
                <Link to={`/product/${val.id}`}>
                  <img src={val.cover} alt="" />
                </Link>
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
