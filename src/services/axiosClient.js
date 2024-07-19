// src/services/axiosClient.js
import axios from "axios";
import queryString from "query-string";
import { API_URL } from "../constants";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        alert('Unauthorized: Please check your access token.');
      }
      if (error.response.status === 400) {
        alert('Bad Request: Please check the request parameters.');
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);




export default axiosClient;
