import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const UseAllUser = () => {

  const {user,loading}=useContext(AuthContext);
   
    const { data: allUsers = [], isLoading: allUsersLoading,refetch } = useQuery({
        queryKey: ["users"],
        // enabled: loading,
    
        queryFn: async () => {
          const res = await fetch(' https://summer-camp-school-server-seven.vercel.app/users');
          // console.log(res);
          return res.json();
        },
      });
      return [allUsers,allUsersLoading,refetch];



      
};

export default UseAllUser;