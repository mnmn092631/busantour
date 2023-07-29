import axios, { Axios } from "axios";

const client: Axios = axios.create({
  // baseURL: "http://10.125.121.178:8080",
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getData = async <T>(url: string): Promise<T[]> => {
  try {
    const res = await client.get<T[]>(url);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const postData = async <T>(url: string, data?: any): Promise<T> => {
  try {
    const res = await client.post<T>(url, data);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const putData = async <T>(url: string, data?: any): Promise<T> => {
  try {
    const res = await client.put<T>(url, data);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const res = await client.delete<T>(url);
    return res.data;
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    else message = String(e);
    throw new Error(message);
  }
};
