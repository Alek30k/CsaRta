import React, { useEffect, useState } from "react";
import Ndata from "./Ndata";

const Cart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601);
  console.log(isMobile);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 601;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <>
      <div
        className={`${
          isMobile ? "content grid1 productStock" : "content grid productStock"
        }`}
      >
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
