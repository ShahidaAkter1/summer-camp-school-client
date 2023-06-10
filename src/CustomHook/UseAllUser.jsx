import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const UseAllUser = () => {
   
    const { data: allUsers = [], isLoading: allUsersLoading,refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/users');
          // console.log(res);
          return res.json();
        },
      });
      return [allUsers,refetch];
};

export default UseAllUser;