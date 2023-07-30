import axios, { Axios } from "axios";

const client: Axios = axios.create({
  // baseURL: "http://10.125.121.178:8080",
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const sendHttpRequest = async <T>(method: "GET" | "POST" | "PUT" | "DELETE", url: string, data?: any): Promise<T> => {
  try {
    const res = await client.request<T>({
      method,
      url,
      data,
    });

    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const getData = <T>(url: string): Promise<T> => sendHttpRequest<T>("GET", url);
export const postData = <T>(url: string, data?: any): Promise<T> => sendHttpRequest<T>("POST", url, data);
export const putData = <T>(url: string, data?: any): Promise<T> => sendHttpRequest<T>("PUT", url, data);
export const deleteData = <T>(url: string): Promise<T> => sendHttpRequest<T>("DELETE", url);
