import React from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "../../components/Data";

const CatgFilter = ({ filterMarcas, setCatOpen, catOpen }) => {
  const { DataCategory } = Data;

  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <>
      <div
        className={catOpen && "categorySearch"}
        onClick={() => setCatOpen(true)}
      >
        {DataCategory.map((value) => (
          <div className="listItem" key={value.id}>
            {cat === value.name.toLowerCase() && (
              <div>
                {value.subCat.map((cat) => (
                  // <Link to={`/products/${cat.name}`}>

                  <div
                    key={cat.id}
                    className="subCat"
                    onClick={() => filterMarcas(cat)}
                  >
                    {/* <input type="checkbox" /> */}
                    <label>{cat.name}</label>
                    {/* <img src={flecha} alt="" /> */}
                  </div>

                  // </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CatgFilter;
