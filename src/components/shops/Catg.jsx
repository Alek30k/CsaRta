import React from "react";

const Catg = ({ cateName, filterMarcas }) => {
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
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Marcas </h1>
          <h1>Tiendas </h1>
        </div>
        {cateName.map((marca) => {
          return (
            <div
              className="box f_flex"
              key={marca}
              onClick={() => filterMarcas(marca)}
            >
              {/* <img src={marca.cateImg} alt="" /> */}
              <span>{marca}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>Ver todas las marcas</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
