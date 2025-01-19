import axios from "axios";

const axiosInstance = axios.create({
   // baseURL: 'http://localhost:8000'
   baseURL: 'https://gigbite-server.vercel.app'
})

const useAxiosPublic = () => {
   return axiosInstance;
};

export default useAxiosPublic;