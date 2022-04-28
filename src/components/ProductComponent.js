import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((item) => {
    const { id, image, title, price, category } = item;
    return (
      <Link key={id} to={`/product/${id}`}>
        <div className="card">
          <div className="mt-4">
            <img src={image} className="card-img-top" alt={title} />
          </div>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="">$ {price}</p>
            <p className="">{category}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div>Loading</div>
      ) : (
        <Fragment>{renderList}</Fragment>
      )}
    </>
  );
};

export default ProductComponent;
