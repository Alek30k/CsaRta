import React from "react";

const Catg = ({
  cateName,
  filterMarcas,
  shopItems,
  setProducts,
  setCatOpen,
  catOpen,
}) => {
  // const data = [
  //   {
  //     cateImg: "./images/category/cat-1.png",
  //     cateName: "Apple",
  //   },
  //   {
  //     cateImg: "./images/category/cat-2.png",
  //     cateName: "Samasung",
  //   },
  //   {
  //     cateImg: "./images/category/cat-1.png",
  //     cateName: "Oppo",
  //   },
  //   {
  //     cateImg: "./images/category/cat-2.png",
  //     cateName: "Vivo",
  //   },
  //   {
  //     cateImg: "./images/category/cat-1.png",
  //     cateName: "Redimi",
  //   },
  //   {
  //     cateImg: "./images/category/cat-2.png",
  //     cateName: "Sony",
  //   },
  // ];

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
