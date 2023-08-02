import { AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Title from "./Title";

const ProductListFilter = ({ listFiltered }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const title = path.replace("&", " ");

  return (
    <div className="productsFilter">
      <div className="container">
        {/* <div className={`product-list ${grid_view ? "gridview" : "listview"}`}> */}
        <Title title={title} />
        <div className="product-list gridview">
          {listFiltered?.map((product, i) => {
            return (
              <Link
                to={`/product/${product?._id}`}
                className="product-item"
                key={i}
              >
                <div className="product-item-img">
                  {/* <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="img-cover"
                  /> */}
                  <img src={product.img[0]} alt="" className="img-cover " />
                  {/* <div className="product-discount">
                    {product?.discountPercentage}
                    <span>%</span>
                  </div> */}
                </div>
                <div className="product-item-body">
                  <span className="product-category">{product?.category}</span>
                  <span className="product-title">{product?.name}</span>

                  <div className="product-price">
                    <span className="fw-6 fs-16">$ &nbsp;{product?.price}</span>
                    {/* <span className="text-dark">Brand: {product?.brand}</span> */}
                  </div>

                  <div className="product-item-bottom fs-12 flex align-center">
                    <div>
                      <span className="fw-6">Stock:</span> {product?.stock}
                    </div>
                    <div className="product-rating flex align-center">
                      <AiOutlineStar />
                      {product?.rating}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListFilter;
