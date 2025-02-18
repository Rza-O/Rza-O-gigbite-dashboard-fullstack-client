import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000'
   // baseURL: 'https://gigbite-server.vercel.app'
})

const useAxiosSecure = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();
   axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, (error) => {
      return Promise.reject(error);
   });

   axiosInstance.interceptors.response.use((response) => {
      return response;
   }, async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
         await logOut();
         navigate('/login')
      }
      return Promise.reject(error);
   })
   return axiosInstance;
};

export default useAxiosSecure;