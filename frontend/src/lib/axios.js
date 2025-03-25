import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:  "https://real-time-chat-0i6x.onrender.com/api",
  withCredentials: true,
});
