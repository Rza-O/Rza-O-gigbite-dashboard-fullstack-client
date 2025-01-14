import axios from "axios";

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000'
})

const useAxiosPublic = () => {
   return axiosInstance;
};

export default useAxiosPublic;