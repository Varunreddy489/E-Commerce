import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:'https://ecommerce-api-8k1i.onrender.com/api',
  withCredentials: true,
});