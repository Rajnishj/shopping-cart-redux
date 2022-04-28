import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Api from "../apis/fakeApiStore";
import { setProducts, fetchAllData } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const item = useSelector((state) => state.allProducts.items);
  console.log("items", item);
  const dispatch = useDispatch(products);

  const fetchProducts = useCallback(async () => {
    const res = await Api.get("/products").catch((err) => {
      console.log("err", err);
    });
    dispatch(setProducts(res.data));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllData());
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  return (
    <div className=" container mt-5">
      <div className="product-info">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
