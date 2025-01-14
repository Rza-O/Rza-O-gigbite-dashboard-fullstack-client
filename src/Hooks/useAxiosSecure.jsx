import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000'
})


const useAxiosSecure = () => {
   return axiosInstance;
};

export default useAxiosSecure;