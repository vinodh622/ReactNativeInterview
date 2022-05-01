import axios from "../helpers/axios";

import {
  PRODUCT_REQ,
  PRODUCT_SUCCES,
  PRODUCT_FAIL,
PRODUCT_DEL_REQ,
PRODUCT_DEL_SUCCESS,
 PRODUCT_DFAIL
  



} from "../actions/constants";

export const getProducts = () => async (dispatch) => {
  
  try {
    dispatch({ type: PRODUCT_REQ });
 
    let res = await axios.get(`/getallproduct`);

    if (res.status === 201) {
        console.log("vino   2");
      dispatch({ type: PRODUCT_SUCCES, payload: res.data.productall });
    }
  } catch (error) {
    console.log(error.name);

    dispatch({
      type: PRODUCT_FAIL,
      payload: error,
    });
  }
};




export const deleteProducts = (id) => async (dispatch) => {
   
  
    try {
      dispatch({ type: PRODUCT_DEL_REQ });
     
      let res = await axios.delete(`/getprodutdelete/${id}`);
  
      if (res.status === 200) {
        console.log("vino   1");
        dispatch({ type: PRODUCT_DEL_SUCCESS, payload: id });
      }
    } catch (error) {
      console.log(error.name);
  
      dispatch({
        type: PRODUCT_DFAIL,
        payload: error,
      });
    }
  };
  

