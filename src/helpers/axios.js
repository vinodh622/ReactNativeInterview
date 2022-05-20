import axios from "axios";
import { api } from "../Configs/api";


const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    bearer: token ? token : "",
  },
});

axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const status =
      error.response.status === 401 || error.response.status === 500||
      error.response.status === 400
        ? error.response.status
        : null;
    if (status) {
      //console.log(error.response)
      console.log(error.response.data)
     // console.log(error.response.statusText);
    }

    //     if (status) {
    // console.log(status.data)
    //     }
    return Promise.reject(error);
  }
);

export default axiosIntance;
