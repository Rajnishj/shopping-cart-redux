import React, { useCallback, useEffect } from "react";
import Api from "../apis/fakeApiStore";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.allProducts.product);
  const { title, image, price, description } = product;
  console.log(product);
  const { productid } = useParams();
  console.log(productid);
  const dispatch = useDispatch();
  const fetchSingleProducts = useCallback(async () => {
    const res = await Api.get(`/products/${productid}`).catch((err) => {
      console.log("err", err);
    });
    dispatch(selectedProducts(res.data));
  }, [dispatch, productid]);

  useEffect(() => {
    fetchSingleProducts();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [fetchSingleProducts, dispatch]);
  return (
    <div className="container mt-5">
      <div className="row">
        {Object.keys(product).length === 0 ? (
          <h1>Loading</h1>
        ) : (
          <div className="col-sm-12 col-md-8 m-auto item-detail">
            <div className="img-container">
              <img src={image} alt={title} />
            </div>
            <div className="detail-sec">
              <h5>{title}</h5>
              <div className="price">$ {price}</div>
              <div className="category">
                <p>{title}</p>
              </div>
              <p>{description}</p>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
