import axios, { AxiosInstance, AxiosResponse } from "axios";
import placeService from "./placeService";
import tourService from "./tourService";
import festivalService from "./festivalService";
import foodService from "./foodService";
import loginService from "./login";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://10.125.121.178:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getData = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.get(url);
  return response.data;
};

export const postData = async <T>(url: string, data?: any): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.post(url, data);
  return response.data;
};

export const putData = async <T>(url: string, data?: any): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.put(url, data);
  return response.data;
};

export const deleteData = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.delete(url);
  return response.data;
};

const apiService = {
  placeService,
  tourService,
  festivalService,
  foodService,
  loginService,
};

export default apiService;
