import axios, { AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const baseUrl = process.env.NEXT_PUBLIC_ENDPOINT;

const client = axios.create({
  timeout: 60000,
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   withCredentials: true,
});
const cookies = new Cookies();
client.interceptors.request.use(
  (config) => {
    const tkn = cookies.get("tkn");
    if (tkn) {
      config.headers["Authorization"] = `Bearer ${tkn}`;
    }
    return config;
  },
  (error) => {
    throw error;
  },
);
client.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);

export const request = ({ ...options }: AxiosRequestConfig) => client(options);
