import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { data: userData = {}, isLoading, refetch } = useQuery({
      queryKey: ['user', user],
      enabled: !loading,
      queryFn: async () => {
         const { data } = await axiosSecure(`/user/${user?.email}`);
         return data
      }
   })
   return [userData, refetch, isLoading]
};

export default useUser;