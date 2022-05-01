import axios from "axios";
import { api } from "../Configs/api";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjhlYzFjNThhMTM5N2FkOWQ2Y2NhMyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjUxMjMyODE0LCJleHAiOjE2NTE4Mzc2MTR9.OaNAlckUpFtvK4RmH95cbHPlmylV7iW8AlYh6IASFW8'

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    bearer: token ? token : "",
  },
});


// axiosIntance.interceptors.request.use((req) => {
//   const { auth } = store.getState(); 
//   if (auth.token) {
//     req.headers.Authorization = `Bearer ${auth.token}`;
//   }
//   return req;
// });

// axiosIntance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//       localStorage.clear();
//       store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosIntance;