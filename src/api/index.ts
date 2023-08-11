import axios, { AxiosInstance } from "axios";
import placeService from "./placeService";
import festivalService from "./festivalService";
import foodService from "./foodService";
import tourService from "./tourService";
import authService from "./authService";
import commentService from "./commentService";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://10.125.121.178:8080",
  // baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const apiService = {
  placeService,
  festivalService,
  foodService,
  tourService,
  authService,
  commentService,
};

export default apiService;
