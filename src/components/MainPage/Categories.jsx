import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/almacen.png",
      cateName: "Almacén",
    },
    {
      cateImg: "./images/category/celiacos.png",
      cateName: "Celíacos",
    },
    {
      cateImg: "./images/category/congelados.png",
      cateName: "Congelados",
    },
    {
      cateImg: "./images/category/electro.png",
      cateName: "Electro",
    },
    {
      cateImg: "./images/category/pan.png",
      cateName: "Panificados",
    },
    {
      cateImg: "./images/category/limpieza.png",
      cateName: "Limpieza",
    },
    {
      cateImg: "./images/category/mascotas.png",
      cateName: "Mascotas",
    },
    {
      cateImg: "./images/category/cafe.png",
      cateName: "Café",
    },
    {
      cateImg: "./images/category/moto.png",
      cateName: "Motos",
    },
    {
      cateImg: "./images/category/regalo.png",
      cateName: "Regalos",
    },

    {
      cateImg: "./images/category/vino.png",
      cateName: "Vinos",
    },
  ];

  return (
    <>
      <div className="category active ">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
