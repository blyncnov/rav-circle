import axios, { AxiosInstance } from "axios";

export const axios_rav: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios_rav;
