import {
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
  FETCH_ALL_PRODUCT,
} from "./types";
import Api from "../../apis/fakeApiStore";
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};

export const fetchAllData = () => async (dispatch) => {
  const res = await Api.get("/products");
  console.log(res.data);
  dispatch({
    type: FETCH_ALL_PRODUCT,
    payload: res.data,
  });
};
