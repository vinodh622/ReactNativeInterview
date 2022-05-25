import axios from "axios";

import {
  PRODUCT_REQ,
  PRODUCT_SUCCES,
  PRODUCT_FAIL,
  PRODUCT_DEL_REQ,
  PRODUCT_DEL_SUCCESS,
  PRODUCT_DFAIL,
} from "../actions/constants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQ });

    const axiosIntance = axios.create({
      // headers: {
      //   bearer:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjhlYzFjNThhMTM5N2FkOWQ2Y2NhMyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjUxOTI4NjA3LCJleHAiOjE2NTI1MzM0MDd9.R1ltRnqAWHQvED_sF1qQW96Tvf4nPnGrv8T-S9F8kqM",
      // },
    });
    axiosIntance.interceptors.response.use( (res) => {
      return res; }, (error) => { console.log(error, "haibababa")});
      
    let rea = await axiosIntance.get("http://localhost:8000/api/getallproduct");
    
    if (rea.status === 201) {
      dispatch({ type: PRODUCT_SUCCES, payload: rea.data.productall });
    } else {
      console.log("wqwjdqwd[qdk[qwkd[qdkq[kdqp");
    }
  } catch (error) {
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
