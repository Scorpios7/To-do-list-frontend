// axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000', // 替换为你的API地址
    timeout: 10000, // 超时时间设置
});

// 请求拦截器
// axiosInstance.interceptors.request.use(
//     (config) => {
//         // 可以在这里添加 Token 或其他头部信息
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// 响应拦截器
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         // 统一处理错误
//         console.error('API Error:', error);
//         return Promise.reject(error);
//     }
// );

// 响应拦截器（可以统一处理错误响应）
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);


export default axiosInstance;
