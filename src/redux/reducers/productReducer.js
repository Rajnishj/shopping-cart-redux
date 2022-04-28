import {
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
  SET_PRODUCTS,
  FETCH_ALL_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
  product: {},
  items: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SELECTED_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case REMOVE_SELECTED_PRODUCTS:
      return {
        ...state,
        product: {},
      };
    case FETCH_ALL_PRODUCT:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

// export const SingleProductReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SELECTED_PRODUCTS:
//       return {
//         ...state,
//         product: action.payload,
//       };

//     default:
//       return state;
//   }
// };
