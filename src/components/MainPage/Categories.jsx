import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ setCatFiltered, products }) => {
  const data = [
    {
      id: 1,
      cateImg: "./images/category/almacen.png",
      cateName: "almacen",
    },
    {
      id: 3,
      cateImg: "./images/category/congelados.png",
      cateName: "congelados",
    },
    {
      id: 4,
      cateImg: "./images/category/electro.png",
      cateName: "electro",
    },
    {
      id: 5,
      cateImg: "./images/category/pan.png",
      cateName: "panaderia",
    },
    {
      id: 6,
      cateImg: "./images/category/limpieza.png",
      cateName: "limpieza",
    },
    {
      id: 7,
      cateImg: "./images/category/telefono.png",
      cateName: "telefonos",
    },
    {
      id: 8,
      cateImg: "./images/category/cafe.png",
      cateName: "cafe",
    },
    {
      id: 9,
      cateImg: "./images/category/hogar.png",
      cateName: "hogar",
    },
    {
      id: 10,
      cateImg: "./images/category/queso.png",
      cateName: "lacteos",
    },

    {
      id: 11,
      cateImg: "./images/category/vino.png",
      cateName: "bebidas",
    },
  ];

  const filterMarcas = (value) => {
    const filteredProduct = products.filter(
      (p) => p.catCat.toLowerCase() === value.cateName
    );
    setCatFiltered(filteredProduct);
  };

  return (
    <>
      <div className="category active ">
        {data.map((value, index) => {
          return (
            <Link to={`/products/${value.cateName}`} key={index}>
              <div className="box  f_flex" onClick={() => filterMarcas(value)}>
                <img src={value.cateImg} alt="" />

                <span>{value.cateName}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
