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
          const res = await fetch('http://localhost:5000/users');
          // console.log(res);
          return res.json();
        },
      });
      return [allUsers,allUsersLoading,refetch];
};

export default UseAllUser;