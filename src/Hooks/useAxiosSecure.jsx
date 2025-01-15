import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000'
})

const useAxiosSecure = () => {
   axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      console.log('this is intercepting from interceptors console->', token)
      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, (error) => {
      return Promise.reject(error);
   });
   return axiosInstance;
};

export default useAxiosSecure;