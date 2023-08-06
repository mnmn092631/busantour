import axios, { AxiosInstance } from "axios";
import placeService from "./placeService";
import tourService from "./tourService";
import festivalService from "./festivalService";
import foodService from "./foodService";
import loginService from "./loginService";
import joinService from "./joinService";

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "http://10.125.121.178:8080",
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const apiService = {
  placeService,
  tourService,
  festivalService,
  foodService,
  loginService,
  joinService,
};

export default apiService;
