

import {
  CARTADD,

  



} from "../actions/constants";

export const addCartact = (e) => async (dispatch) => {
  
  try {
    dispatch({ type: CARTADD ,   payload:e});
 
  
  } catch (error) {
    console.log(error.name);

  }
};


