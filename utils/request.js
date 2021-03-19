//https://www.mdeditor.tw/pl/gc7t/zh-hk
import axios from "axios";
const service = axios.create({
  baseURL,
  timeout: 5000 // request timeout
});
// 發起請求之前的攔截器
service.interceptors.request.use(
  config => {
    // 如果有token 就攜帶tokon
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);
// 響應攔截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;