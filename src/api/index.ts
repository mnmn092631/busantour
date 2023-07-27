import axios, { Axios, AxiosRequestConfig } from "axios";
import { APIResponse } from "src/types/api";

const client: Axios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// 메서드 타입 정의
export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const res = await client.get<APIResponse<T>>(url, config);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const res = await client.post<APIResponse<T>>(url, data, config);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const putData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const res = await client.put<APIResponse<T>>(url, data, config);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
  try {
    const res = await client.delete<APIResponse<T>>(url, config);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};
