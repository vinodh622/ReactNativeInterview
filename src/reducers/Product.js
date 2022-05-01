//  function productReducer (state={products:[]}, action,) {
//     switch (action.type) {

//         default:
//            return state;
//     }

//  }
//  export {productReducer};
import {
  PRODUCT_REQ,
  PRODUCT_SUCCES,
  PRODUCT_FAIL,
  PRODUCT_DEL_REQ,
  PRODUCT_DEL_SUCCESS,
  PRODUCT_DFAIL,
} from "../actions/constants";

function productReducer(state = { products: [], loading: true }, action) {
  switch (action.type) {
    case PRODUCT_REQ:
      return {
        loading: false,
        products: [],
      };
      case PRODUCT_SUCCES:
        return {
          loading: false,
          products: action.payload,
        };

    case PRODUCT_DEL_REQ:
      return {
        ...state,
        
      
      };

    case PRODUCT_DEL_SUCCESS:
    
      let filter = state.products.filter((e) => e._id !== action.payload);
     
      return {
        loading: false,

        products: [...filter],
      };

   

    default:
      return state;
  }
}

export { productReducer };
