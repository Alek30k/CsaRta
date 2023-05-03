import React from "react";

const Catg = ({
  cateName,
  filterMarcas,
  shopItems,
  setProducts,
  setCatOpen,
  catOpen,
}) => {
  const allBrands = () => {
    setProducts(shopItems);
  };

  return (
    <>
      <div className={catOpen && "category"} onClick={() => setCatOpen(true)}>
        <div className="cheadi d_flex">
          <h1>Marcas </h1>
          {/* <h1>Tiendas </h1> */}
        </div>
        {cateName.map((marca) => {
          return (
            <div
              className="boxi f_flex"
              key={marca}
              onClick={() => filterMarcas(marca)}
            >
              {/* <img src={marca.cateImg} alt="" /> */}
              <span>{marca}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Catg;
