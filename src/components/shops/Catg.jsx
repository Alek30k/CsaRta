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

  // const [isMobile, setIsMobile] = useState(window.innerWidth < 601);
  // console.log(isMobile);

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       const ismobile = window.innerWidth < 601;
  //       if (ismobile !== isMobile) setIsMobile(ismobile);
  //     },
  //     false
  //   );
  // }, [isMobile]);

  return (
    <>
      <div className={catOpen && "category "} onClick={() => setCatOpen(true)}>
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
