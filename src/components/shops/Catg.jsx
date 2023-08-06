import React from "react";

const Catg = ({ cateName, filterMarcas, setCatOpen, catOpen }) => {
  return (
    <>
      <div className={catOpen && "category"} onClick={() => setCatOpen(true)}>
        <div className="cheadi d_flex">
          <h1 onClick={() => filterMarcas("Marcas")}>Marcas </h1>
          {/* <h1>Tiendas </h1> */}
        </div>
        {cateName.map((marca) => {
          return (
            <div
              className="boxi f_flex"
              key={marca}
              onClick={() => filterMarcas(marca)}
            >
              <span>{marca}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Catg;
