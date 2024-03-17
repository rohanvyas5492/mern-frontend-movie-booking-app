import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  responseType: "json",
});

// apiInstance.interceptors.request.use((request) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
//   return request;
// });
